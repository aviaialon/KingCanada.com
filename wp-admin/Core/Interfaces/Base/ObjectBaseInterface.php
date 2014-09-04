<?php
/**
 * Base Interface for objects
 *
 * @package    Core
 * @subpackage Interfaces
 * @file       Core/Interfaces/Base/ObjectInterface.php
 * @desc       Used interface for base objects implementations
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */

namespace Core\Interfaces\Base;

/**
 * Base Interface for objects
 *
 * @package    Core
 * @subpackage Interfaces
 * @file       Core/Interfaces/Base/ObjectInterface.php
 * @desc       Used interface for base objects implementations
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */

abstract class ObjectBaseInterface
{

    /**
     * Data that was changed, used as a marker for saving
     *
     * @access protected
     * @var    array
     */
    protected $_changedData;

    /**
     * Data Registry
     *
     * @access protected
     * @var    array
     */
    protected $_dataRegistry;

    /**
     * Class static loader
     *
     * @access public
     * @param  array $data
     * @return void
     */
    public static function getInstance($data = null)
    {
        $instanceNamespace = get_called_class();
        $instance          = new $instanceNamespace();
        $data              = (true === is_array($data) ? $data : array($data));
        $instance->_callback(__FUNCTION__, $data);

        return $instance;
    }

    /**
     * Class Variabvle Data setter method Sets object class variables by batch
     *
     * @access public
     * @param  array $data
     * @return void
     */
    public function setVariableArray(array $data = array())
    {
    }

    /**
     * Method used to dispatch callbacks post action
     *
     * @access protected
     * @param  string $action         Action called
     * @param  array  $arguments      (Optional) arguments to pass to the callback method
     * @param  object $objectInstance (Optional) The current instance. Used with Singleton objects
     * @return void
     */
    protected function _callback($action, array $arguments = array())
    {
        if (true === method_exists($this, 'on' . ucwords($action)))
        {
            call_user_func_array(array($this, 'on' . ucwords($action)), array($arguments));
        }
    }

    /**
     * Method used to dispatch callbacks pre action
     *
     * @access protected
     * @param  string $action    Action called
     * @param  array  $arguments (Optional) arguments to pass to the callback method
     * @return void
     */
    protected function _beforeCallback($action, array $arguments = array())
    {
        if (true === method_exists($this, 'onBefore' . ucwords($action)))
        {
            //forward_static_call_array(array(get_class($this), 'onBefore' . ucwords($action)), (array) $arguments);
            call_user_func_array(array($this, 'onBefore' . ucwords($action)), (array) $arguments);
        }
    }

    /**
     * This method returns a class variable. if no arguments are passed
     * all of the class variables are returned. if an argument is passes and
     * the data not found, false is returned.
     *
     * @param  string $identifier The variable key
     * @param  string $indexKey   (Optional) The sub identifier key, usefull to return a value from a stored array
     * @return mixted | false
     */
    public function getVariable($identifier = null, $indexKey = null)
    {
        $returnData = false;
        $arguments  = func_get_args();
        $this->_beforeCallback(__FUNCTION__, $arguments);

        if (empty($identifier) === true)
        {
            $returnData = $this->_dataRegistry;
        }
        else if (true === isset($this->_dataRegistry[strtolower($identifier)])) {
            $returnData = $this->_dataRegistry[strtolower($identifier)];

            // Here, we check if its an array and a key was requested
            if (false === empty($indexKey) && true === is_array($returnData)) {
                $returnData = (empty($returnData[$indexKey]) === false) ? $returnData[$indexKey] : false;
            }
        }

        $this->_callback(__FUNCTION__, $arguments);

        return $returnData;
    }

    /**
     * This method assigns a variable
     *
     * @param string $identifier The variable key
     * @param string $value      (Optional) The variable value
     * @return void
     */
    public function setVariable($identifier, $value = null)
    {
        $arguments  = func_get_args();
        $this->_beforeCallback(__FUNCTION__, $arguments);
        $this->_dataRegistry[strtolower($identifier)] = $value;

        // Track changed data only for Hybernate inherited objects
        if (
			(true  === ($this instanceof \Core\Interfaces\Base\HybernateBaseInterface)) &&
			(empty($this->_excludeFields) === true || false === in_array(strtolower($identifier), $this->_excludeFields))
		) {
            $this->_changedData[strtolower($identifier)]  = $value;
        }

        $this->_callback(__FUNCTION__, $arguments);
    }


    /**
     * This method is used when setting class members with PDO loading
     *
     * @access public
     * @param  mixed $name      Variable name
     * @param  mixed $value    (Optional) Value
     * @return void | \Core\Interfaces\Base\Interfaces_Base_HybernateBaseInterface
     */
    public function __set($name, $value = null)
    {
        $this->_dataRegistry[strtolower($name)] = $value;

        return $this;
    }

    /**
     * This method returns a class variable. if no arguments are passed
     * This is a magic method implementation and should not be called directly
     * all of the class variables are returned. if an argument is passes and
     * the data not found, FALSE is returned.
     *
     * @access public
     * @param  mixed $functionName         Function called and trapped by __call
     * @param  mixed $arguments (Optional) Arguments passed to the _call method at runtime
     * @return mixed | \Core\Interfaces\Base\Interfaces_Base_HybernateBaseInterface
     */
    public function __call($functionName, array $arguments)
    {
        $action     = strtolower(substr($functionName, 0, 3));
        $param      = strtolower(substr($functionName, 3));
        $_arguments = $arguments;
        $setterVal  = array_shift($_arguments);

        switch ($action) {
            case 'get' : {
                // Here, we use the argument as a possible return value array key
                // So it can be used like this $object->getMyArray('key');
                // which will return $myArray['key'] when setting $object->setMyArray($myArray);
                return $this->getVariable($param, array_shift($arguments));

                break;
            }

            case 'set' : {
                $this->setVariable($param, $setterVal);
                /**
                 * On a setter method, we return the object so we can chain commands
                 * EX: $object->getUser()->setFirstName('Avi')->save();
                 */
                return $this;

                break;
            }

            case 'add' : {

                $currentValue = $this->getVariable($param);
                $setterConcat  = null;

                if (true === is_numeric($setterVal)) {
                    $setterConcat = ((int) $setterVal + (int) $currentValue);
                }
                else if (true === is_array($currentValue)) {
                    $setterConcat   = $currentValue;
                    $indexKey       = array_shift($arguments);
					$indexedVal		= array_shift($arguments);
					
                    if (is_null($indexedVal) === false) {
                        $setterConcat[$indexKey] = $indexedVal;
                    } else {
                        $setterConcat[] = $indexKey;
                    }

                } else {
                    $setterConcat = $currentValue . $setterVal;
                }


                $this->setVariable($param, $setterConcat);
                /**
                 * On a setter method, we return the object so we can chain commands
                 * EX: $object->getUser()->setFirstName('Avi')->save();
                */
                return $this;

                break;
            }

            default : {
                throw new \Exception(sprintf("Undefined method [%s] in %s", $functionName, get_called_class()));
            }
        }
    }
}