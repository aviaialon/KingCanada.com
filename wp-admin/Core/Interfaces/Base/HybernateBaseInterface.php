<?php
/**
 * Base Interface for database driven shared ORM object
 *
 * @package    Core
 * @subpackage Interfaces
 * @file       Core/Interfaces/Base/HybernateBaseInterface.php
 * @desc       Used interface for ORM implementations
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */
namespace Core\Interfaces\Base;

/**
 * Base Interface for database driven shared ORM object
 *
 * @package    Core
 * @subpackage Interfaces
 * @file       Core/Interfaces/Base/HybernateBaseInterface.php
 * @desc       Used interface for ORM implementations
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */
interface HybernateBaseInterface
{
    /**
     * Instantiator static method
     *
     * @access public
     * @param  mixed $identifier (Optional) This is the identifier used to load the object (id | array(column=>value))
     * @return \Core\Interfaces\Base\HybernateBaseInterface
     */
    public static function getInstance($identifier = null);

    /**
     * Multi Instantiator static method
     *
     * @access public
     * @param  array $identifiers (Optional) Key/Value identifier pairs
     * @return array of \Core\Interfaces\Base\HybernateBaseInterface
     */
    public static function getMultiInstance(array $identifiers = array());

    /**
     * This method returns a class variable. if no arguments are passed
     * This is a magic method implementation and should not be called directly
     * all of the class variables are returned. if an argument is passes and
     * the data not found, FALSE is returned.
     *
     * @access public
     * @param  mixed $functionName         Function called and trapped by __call
     * @param  mixed $arguments (Optional) Arguments passed to the _call method at runtime
     * @return mixed | \Core\Interfaces\Base\HybernateBaseInterface
     */
    public function __call($functionName, array $arguments);

    /**
     * This method is used when setting class members with PDO loading
     *
     * @access public
     * @param  mixed $name      Variable name
     * @param  mixed $value    (Optional) Value
     * @return void | \Core\Interfaces\Base\HybernateBaseInterface
     */
    public function __set($name, $value = null);

    /**
     * Variable getter method
     *
     * @access public
     * @param  mixed $identifier (Optional) This is the identifier key, if none supplied, all data is returned
     * @return mixed
     */
    public function getVariable($identifier = null);

    /**
     * Variable setter method
     *
     * @access public
     * @param  string $identifier Data key to set
     * @param  mixed  $value      (optional) Data value to set
     * @return void
     */
    public function setVariable($identifier, $value = null);

    /**
     * Object save method
     *
     * @access public
     * @return void
     */
    public function save();

    /**
     * Object delete method
     *
     * @access public
     * @return void
     */
    public function delete();
}
