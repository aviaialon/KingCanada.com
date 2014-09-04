<?php
/**
 * Application Administration Class
 *
 * This class controls the Application scope
 *
 * @namespace    Core
 * @package      Core
 * @subpackage   none
 * @author       Avi Aialon <aviaialon@gmail.com>
 * @copyright    2012 Canspan. All Rights Reserved
 * @license      http://www.canspan.com/license
 * @version      SVN: $Id$
 * @link         SVN: $HeadURL$
 * @since        12:35:53 AM
 *
 */
namespace Core\Config;

/**
 * Begin Application Class
 *
 * @author admin
 */
class Configurations
    extends \Core\Interfaces\Base\AbstractSingletonInterface
{
    /**
     * Bootstrap configuration resources
     *
     * @param  array $configs (Optional) The array of config files to parse
     * @access public
     * @throws \Exception
     * @return void
     */
    public final function onGetInstance(array $configs = array())
    {
        $Application = \Core\Application::getInstance();
        $configs     = array();

        foreach ($Application->getConfigList() as $configFile) {
            $configs = array_merge($configs, parse_ini_file($configFile, true, INI_SCANNER_NORMAL));
        }

        // Parse dynamic variables.
        $configs = array_map(function ($configValue) use ($configs) {
            return str_replace(
                        array('%DOC_ROOT%', '%CORE_DIR%', '%APP_DIR%', '%%BASE%%'),
                        array($_SERVER['DOCUMENT_ROOT'], realpath(__DIR__) . '../', getcwd(), getenv('BASE')),
            $configValue);
        }, $configs);

        $this->setConfigs($configs);
    }

    /**
     * gets a configuration
     *
     * @param  string $configName (Optional) The name of the config, if empty, all the configs are returned
     * @access public
     * @throws \Exception
     * @return mixed
     */
    public final function get($configName = null)
    {
        $retData = $this->_dataRegistry['configs'];

        if (false === empty($configName)) {
            $retData = (true === array_key_exists($configName, $this->_dataRegistry['configs']) ?
                        $this->_dataRegistry['configs'][$configName] : false);
        }

        return $retData;
    }

    /**
     * sets a configuration
     *
     * @param  string $configName  The name of the config, if empty, all the configs are returned
     * @param  mixed  $configValue (Optional) The value of the config
     * @access public
     * @throws \Exception
     * @return \Core\Config\Configurations
     */
    public final function set($configName, $configValue = null)
    {
        $this->_dataRegistry['configs'][$configName] = $configValue;

        return $this;
    }
}