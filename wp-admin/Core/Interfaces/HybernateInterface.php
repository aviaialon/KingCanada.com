<?php
/**
 * Interface for database driven shared ORM object
 * Requires PHP 5 >= 5.3.0
 *
 * @package    Core
 * @subpackage Interfaces
 * @file       Core/Interfaces/HybernateInterface.php
 * @desc       Used interface for ORM implementations
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */

namespace Core\Interfaces;

/**
 * Interface for database driven shared ORM object
 *
 * @package    Core
 * @subpackage Interfaces
 * @file       Core/Interfaces/HybernateInterface.php
 * @desc       Used interface for ORM implementations
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */
abstract class HybernateInterface
    extends \Core\Interfaces\Base\ObjectBaseInterface
    implements \Core\Interfaces\Base\HybernateBaseInterface  {

    /**
     * Data Access Interface
     *
     * @access protected
     * @var    \Core\Database\DriverInterface
     */
    protected $_dataAccessInterface;

    /**
     * Data Object interface type (table name)
     *
     * @access protected
     * @var    string
     */
    protected $_objectInterfaceType;

    /**
     * Class registry Id
     *
     * @access protected
     * @var    string
     */
    protected $intClassRegistryId;

    /**
     * gets a pointer to the instance registry for instantiation
     *
     * @access public
     * @throws \Exception
     * @return \Core\Interfaces\HybernateInterface
     */
    protected static final function _getInstanceRegistry()
    {
        $instanceNamespace                       = get_called_class();
        $instanceRegistry                        = new $instanceNamespace();
		$interfaceArray                          = explode('\\', $instanceNamespace);
        $instanceRegistry->_objectInterfaceType  = strtolower(end($interfaceArray));

        return $instanceRegistry;
    }

    /**
     * Class contructor
     *
     * @return
     */
    public function __construct()
    {
        $instanceNamespace           = get_called_class();
		$interfaceArray              = explode('\\', $instanceNamespace);
        $this->_objectInterfaceType  = end($interfaceArray);
        $this->_dataAccessInterface  = \Core\Database\Driver\Pdo::getInstance();

        $this->_dataAccessInterface->connect();
    }

    /**
     * Lazy load Instantiation method for shared object. Will not query unless is saved
     *
     * @access public
     * @param  mixed $identifier (Optional) This is the identifier used to load the object (id | array(column=>value))
     * @throws \Exception
     * @return \Core\Interfaces\HybernateInterface
     */
    public static function lazyLoad($identifier = null)
    {
        $instanceRegistry = self::_getInstanceRegistry();
        $instanceRegistry->_beforeCallback(__FUNCTION__, array($identifier));
        $instanceRegistry->setId(0);

        if (true === is_numeric($identifier)) {
            // Load the object by ID
            $identityBinding = array('id' => (int) $identifier);
        } else if (true === is_array($identifier) && false === empty($identifier)) {
            // Load by key/value pairs
            $identityBinding = $identifier;
        }

        $instanceRegistry->_dataRegistry = $identityBinding;
        $instanceRegistry->_changedData  = array();

        $instanceRegistry->_callback(__FUNCTION__, array($identifier));

        return $instanceRegistry;
    }

    /**
     * Instantiation method for shared object
     *
     * @access public
     * @param  mixed $identifier (Optional) This is the identifier used to load the object (id | array(column=>value))
     * @throws \Exception
     * @return \Core\Interfaces\HybernateInterface
     */
    public static function getInstance($identifier = null)
    {
        $instanceRegistry = self::_getInstanceRegistry();
        $instanceRegistry->_beforeCallback(__FUNCTION__, array($identifier));
        $instanceRegistry->setId(0);
		
        if (true === is_numeric($identifier)) {
            // Load the object by ID
            $identityBinding = array('id' => (int) $identifier);
        } else if (true === is_array($identifier) && false === empty($identifier)) {
            // Load by key/value pairs
            $identityBinding = $identifier;
        }

        if (false === empty($identityBinding)) {
            $dataCollection = $instanceRegistry->_dataAccessInterface->findByBinding($instanceRegistry->_objectInterfaceType, $identityBinding, array(), 1);

            if (false === empty($dataCollection)) {
                $instanceRegistry->_dataRegistry = array_change_key_case(array_shift($dataCollection), CASE_LOWER);
                $instanceRegistry->_changedData  = array();
            }
        }

        $instanceRegistry->_callback(__FUNCTION__, array($identifier));

        return $instanceRegistry;
    }

    /**
     * Multi Instantiator static method
     *
     * @access public
     * @param  array $identifiers  (Optional) Key/Value identifier pairs
     * @param  bool  $fetchAsArray (Optional) Return the data as array
     * @param  array $sqlParams    (Optional) Sql parameters
     * @return array of \Core\Interfaces\Base\Interfaces_Base_HybernateBaseInterface
     */
    public static function getMultiInstance(array $identifiers = array(), $fetchAsArray = false, array $sqlParams = array())
    {
        $instanceRegistry = self::_getInstanceRegistry();
        $arguments        = func_get_args();
        $instanceRegistry->_beforeCallback(__FUNCTION__, $arguments);

        if (true === $fetchAsArray) {
            $instanceRegistry->_dataAccessInterface->setFetchType(\PDO::FETCH_ASSOC);
        } else {
            $instanceRegistry->_dataAccessInterface->setFetchType(\PDO::FETCH_CLASS, get_called_class());
        }

        $dataCollection = $instanceRegistry->_dataAccessInterface->findByBinding($instanceRegistry->_objectInterfaceType, $identifiers, $sqlParams);

        $instanceRegistry->_callback(__FUNCTION__, $arguments);

        return $dataCollection;
    }

    /**
     * This method saves the object
     *
     * @return boolean
     */
    public function save()
    {
        $arguments  = func_get_args();
        $this->_beforeCallback(__FUNCTION__, $arguments);
        if (false === empty($this->_changedData)) {
            if (true === array_key_exists('id', $this->_changedData) && ((int) $this->_changedData['id'] <= 0)) {
                unset ($this->_changedData['id']);
            }

            $this->setId($this->_dataAccessInterface->updateRecord(strtolower($this->_objectInterfaceType), $this->_changedData, $this->getId()));
            $this->_changedData = null;
        }

        $this->_callback(__FUNCTION__, $arguments);
		
		return ((bool) $this->_dataAccessInterface->affectedRows());
    }

    /**
     * This method deletes the object
     *
     * @return boolean
     */
    public function delete()
    {
        $arguments  = func_get_args();
        $this->_beforeCallback(__FUNCTION__, $arguments);

        if (false === empty($this->_dataRegistry['id'])) {
            $this->_dataAccessInterface->deleteRecord($this->_objectInterfaceType, array('id' => (int) $this->_dataRegistry['id']));
        }

        $this->setId(0);
        $this->_dataRegistry = null;
        $this->_changedData  = null;

        $this->_callback(__FUNCTION__, $arguments);
		
		return ((bool) $this->_dataAccessInterface->affectedRows());
    }

    /**
     * This method returns the class registry ID
     *
     * @access     public
     * @param     none
     * @return     integer
     */
    public function getClassRegistryId()
    {
        $classNamespace = get_class($this);

        if (($this->intClassRegistryId <= 0) && (empty($classNamespace) === false)) {
            $classRegistry = \Core\Hybernate\ClassRegistry\Class_Registry::getInstance(array(
                'className' => $classNamespace
            ));

            if (false === ((bool) $classRegistry->getId()))
            {
                $classRegistry->setClassName($classNamespace);
                $classRegistry->setDescription('Auto Generated Class Registry Key [' . date('Y-m-d H:i:s', time()) . ']');
                $classRegistry->save();
            }

            $this->intClassRegistryId = (int) $classRegistry->getid();
        }

        return ((int) $this->intClassRegistryId);
    }
}
