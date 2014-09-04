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

abstract class AbstractSingletonInterface
    extends \Core\Interfaces\Base\ObjectBaseInterface
{

    /**
     * Holds the class instance
     *
     * @access private
     * @var    array
     */
    private static $_classInstanceRegistry = array();

    /**
     * Accessor method
     *
     * @param  array $options
     * @access public, static
     * @throws \Exception
     * @return object
     */
    public static function getInstance(array $options = array())
    {
    	$requestedNamespace = get_called_class();
        if (empty(self::$_classInstanceRegistry[$requestedNamespace]))
        {
            self::$_classInstanceRegistry[$requestedNamespace]  = new $requestedNamespace();
            self::$_classInstanceRegistry[$requestedNamespace]->_callback(__FUNCTION__, $options);
        }

        return self::$_classInstanceRegistry[$requestedNamespace];
    }

    /**
     * Protected constructor
     *
     * @access protected
     * @throws \Exception
     * @return object
     */
    protected function __construct()
    {
    }

    /**
     * Override the clone method and throw an exception
     *
     * @access public
     * @throws \Exception
     * @return void
     */
    public function __clone()
    {
        throw new \Exception(sprintf("Singleton Class [%s] Cannot be Cloned.", get_called_class()));
    }
}