<?php
/**
 * PDO Driver
 * This Driver implements the RedBean Driver API
 *
 * @file    Database/Driver_Pdo.php
 * @desc    PDO Driver
 * @author  Avi Aialon
 * @license BSD/GPLv2
 *
 * (c) copyright Avi Aialon (DeviantLogic inc)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */
namespace Core\Database\Driver;

 /**
 * PDO Driver
 * This Driver implements the RedBean Driver API
 *
 * @file    Database/Driver_Pdo.php
 * @desc    PDO Driver
 * @author  Avi Aialon
 * @license BSD/GPLv2
 *
 * (c) copyright Avi Aialon (DeviantLogic inc)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */
class Pdo
    extends \Core\Database\Driver\QueryWriter\AQueryWriter
    implements \Core\Database\DriverInterface
{
    /**
     * Singleton Instance container
     *
     * @access     private, static
     * @var     \Core\Database\Driver\Pdo
     */
     private static $_instance;

    /**
     * @var string
     */
    private $dsn;

    /**
     * @var boolean
     */
    protected $debug = FALSE;

    /**
     * @var RedBean_Logger
     */
    protected $logger = NULL;

    /**
     * @var PDO
     */
    protected $pdo;

    /**
     * @var integer
     */
    protected $affectedRows;

    /**
     * @var integer
     */
    protected $resultArray;

    /**
     * @var array
     */
    protected $connectInfo = array();

    /**
     * @var boolean
     */
    protected $isConnected = FALSE;

    /**
     * @var bool
     */
    protected $flagUseStringOnlyBinding = FALSE;

    /**
     * @var string
     */
    protected $mysqlEncoding = '';

    /**
     * @var boolean
     */
    protected $autoSetEncoding = TRUE;

    /**
     * @var \Core\Database\Driver\QueryWriter\AQueryWriter
     */
    protected $_queryWriter;

    /**
     * Pdo Fetch type array(fetchType, class)
     *
     * @var array
     */
    protected $_fetchType;

    /**
     * Constructor. Returns a static instance
     *
     * @param string|PDO $dsn    database connection string if empty, configuration will be used
     * @param string     $user   optional, usename to sign in
     * @param string     $pass   optional, password for connection login
     * @return Core\Database\Database_DriverInterface
     */
    public static function getInstance($dsn = null, $user = null, $pass = null, $autoSetEncoding = true)
    {
        if (empty(\Core\Database\Driver\Pdo::$_instance) === true)
        {
            if (empty($dsn) === true)
            {
                $Application   = \Core\Application::getInstance();
                $configuration = \Core\Application::getInstance()->getConfigs();
                $dsn            = sprintf(
                        'mysql:host=%s;port=%s;dbname=%s',
                        $configuration->get('Application.core.database.host'),
                        $configuration->get('Application.core.database.port'),
                        $configuration->get('Application.core.database.db_name')
                );

                $user          = $configuration->get('Application.core.database.username');
                $pass          = $configuration->get('Application.core.database.password');
            }

            \Core\Database\Driver\Pdo::$_instance = new \Core\Database\Driver\Pdo($dsn, $user, $pass, $autoSetEncoding);
        }

        return \Core\Database\Driver\Pdo::$_instance;
    }

    /**
     * Constructor. You may either specify dsn, user and password or
     * just give an existing PDO connection.
     * Examples:
     *    $driver = new \Core\Database\Driver\Pdo_PDO($dsn, $user, $password);
     *    $driver = new \Core\Database\Driver\Pdo_PDO($existingConnection);
     *
     * @param string|PDO $dsn    database connection string
     * @param string     $user   optional, usename to sign in
     * @param string     $pass   optional, password for connection login
     *
     */
    protected function __construct($dsn, $user = NULL, $pass = NULL, $autoSetEncoding = TRUE)
    {
        $this->autoSetEncoding = $autoSetEncoding;

        if ( $dsn instanceof PDO ) {
            $this->pdo = $dsn;

            $this->isConnected = TRUE;

            if ( $this->autoSetEncoding !== FALSE ) {
                $this->setEncoding();
            }

            $this->pdo->setAttribute( \PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION );
            $this->pdo->setAttribute( \PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_ASSOC );

            // make sure that the dsn at least contains the type
            $this->dsn = $this->getDatabaseType();

        } else {
            $this->dsn = $dsn;

            $this->connectInfo = array( 'pass' => $pass, 'user' => $user );
        }
    }

    /**
     * Binds parameters. This method binds parameters to a PDOStatement for
     * Query Execution. This method binds parameters as NULL, INTEGER or STRING
     * and supports both named keys and question mark keys.
     *
     * @param  PDOStatement $statement  PDO Statement instance
     * @param  array        $bindings   values that need to get bound to the statement
     *
     * @return void
     */
    protected function bindParams($statement, $bindings)
    {
        foreach ( $bindings as $key => &$value ) {
            if ( is_integer( $key ) ) {
                if ( is_null( $value ) ) {
                    $statement->bindValue( $key + 1, NULL, \PDO::PARAM_NULL );
                } elseif ( !$this->flagUseStringOnlyBinding && \Core\Database\Driver\QueryWriter\AQueryWriter::canBeTreatedAsInt( $value ) && $value < 2147483648 ) {
                    $statement->bindParam( $key + 1, $value, \PDO::PARAM_INT );
                } else {
                    $statement->bindParam( $key + 1, $value, \PDO::PARAM_STR );
                }
            } else {
                if ( is_null( $value ) ) {
                    $statement->bindValue( $key, NULL, \PDO::PARAM_NULL );
                } elseif ( !$this->flagUseStringOnlyBinding && \Core\Database\Driver\QueryWriter\AQueryWriter::canBeTreatedAsInt( $value ) && $value < 2147483648 ) {
                    $statement->bindParam( $key, $value, \PDO::PARAM_INT );
                } else {
                    $statement->bindParam( $key, $value, \PDO::PARAM_STR );
                }
            }
        }
    }

    /**
     * This method runs the actual SQL query and binds a list of parameters to the query.
     * slots. The result of the query will be stored in the protected property
     * $rs (always array). The number of rows affected (result of rowcount, if supported by database)
     * is stored in protected property $affectedRows. If the debug flag is set
     * this function will send debugging output to screen buffer.
     *
     * @param string $sql      the SQL string to be send to database server
     * @param array  $bindings the values that need to get bound to the query slots
     *
     * @return void
     *
     * @throws RedBean_Exception_SQL
     */
    protected function runQuery( $sql, $bindings, $options = array() )
    {
        $this->connect();

        if ( $this->debug && $this->logger ) {
            $this->logger->log( $sql, $bindings );
        }

        try {
            if ( strpos( 'pgsql', $this->dsn ) === 0 ) {
                $statement = $this->pdo->prepare( $sql, array( \PDO::PGSQL_ATTR_DISABLE_NATIVE_PREPARED_STATEMENT => TRUE ) );
            } else {
                $statement = $this->pdo->prepare( $sql );
            }

            $this->bindParams( $statement, $bindings );

            $statement->execute();

            $this->affectedRows = $statement->rowCount();

            if ( $statement->columnCount() ) {

                //$fetchStyle = ( isset( $options['fetchStyle'] ) ) ? $options['fetchStyle'] : NULL;
                $fetchStyle = (false === empty($this->_fetchType) ? array_shift($this->_fetchType) : null);
                $fetchClass = (false === empty($this->_fetchType) ? array_shift($this->_fetchType) : null);

                if (false === empty($fetchClass)) {
                    $this->resultArray = $statement->fetchAll( $fetchStyle, $fetchClass );
                } else {
                    $this->resultArray = $statement->fetchAll( $fetchStyle );
                }

                if ( $this->debug && $this->logger ) {
                    $this->logger->log( 'resultset: ' . count( $this->resultArray ) . ' rows' );
                }
            } else {
                $this->resultArray = array();
            }
        } catch ( \PDOException $e ) {

            $e->sql      = $sql;
            $e->bindings = $bindings;

            //Unfortunately the code field is supposed to be int by default (php)
            //So we need a property to convey the SQL State code.
            $err = $e->getMessage();

            if ( $this->debug && $this->logger ) $this->logger->log( 'An error occurred: ' . $err );

            //$exception = new \PDOException( $err, 0 );
            //$exception->setSQLState( $e->getCode() );
            if ( $this->debug ) {
                var_dump(debug_backtrace());
                var_dump($e);
            }

            throw $e;
        }
    }

    /**
    * Try to fix MySQL character encoding problems.
    * MySQL < 5.5 does not support proper 4 byte unicode but they
    * seem to have added it with version 5.5 under a different label: utf8mb4.
    * We try to select the best possible charset based on your version data.
    */
    protected function setEncoding()
    {
        $driver = $this->pdo->getAttribute(\PDO::ATTR_DRIVER_NAME );
        $version = floatval( $this->pdo->getAttribute(\PDO::ATTR_SERVER_VERSION ) );

        if ( $driver === 'mysql' ) {
            $encoding = ($version >= 5.5) ? 'utf8mb4' : 'utf8';
            $this->pdo->setAttribute(\PDO::MYSQL_ATTR_INIT_COMMAND, 'SET NAMES '.$encoding ); //on every re-connect
            $this->pdo->exec(' SET NAMES '. $encoding); //also for current connection
            $this->mysqlEncoding = $encoding;
        }
    }

    /**
    * Returns the best possible encoding for MySQL based on version data.
    *
    * @return string
    */
    public function getMysqlEncoding()
    {
        return $this->mysqlEncoding;
    }

    /**
     * Whether to bind all parameters as strings.
     *
     * @param boolean $yesNo pass TRUE to bind all parameters as strings.
     *
     * @return void
     */
    public function setUseStringOnlyBinding( $yesNo )
    {
        $this->flagUseStringOnlyBinding = (boolean) $yesNo;
    }

    /**
    * Establishes a connection to the database using PHP PDO
    * functionality. If a connection has already been established this
    * method will simply return directly. This method also turns on
    * UTF8 for the database and PDO-ERRMODE-EXCEPTION as well as
    * PDO-FETCH-ASSOC.
    *
    * @throws PDOException
    *
    * @return void
    */
    public function connect()
    {
        if ( $this->isConnected ) return;
        try {
            $user = $this->connectInfo['user'];
            $pass = $this->connectInfo['pass'];

            $this->pdo = new \PDO(
                $this->dsn,
                $user,
                $pass,
                array(
                    \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                    \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
                )
            );

                if ( $this->autoSetEncoding !== FALSE ) {
                    $this->setEncoding();
                }

                $this->pdo->setAttribute(\PDO::ATTR_STRINGIFY_FETCHES, TRUE);

                $this->isConnected = TRUE;
        } catch ( \PDOException $exception ) {
                $matches = array();

                $dbname  = ( preg_match( '/dbname=(\w+)/', $this->dsn, $matches ) ) ? $matches[1] : '?';

                throw new \PDOException( 'Could not connect to database (' . $dbname . ').', $exception->getCode() );
        }

        return $this;
    }

    /**
     * @see \Core\Database\Driver\Pdo::getAll
     */
    public function getAll( $sql, $bindings = array() )
    {
        $this->runQuery( $sql, $bindings );

        return $this->resultArray;
    }

    /**
     * @see Driver::GetAssocRow
     */
    public function getAssocRow( $sql, $bindings = array() )
    {
        $this->runQuery( $sql, $bindings, array(
                'fetchStyle' => \PDO::FETCH_ASSOC
            )
        );

        return $this->resultArray;
    }

    /**
     * @see \Core\Database\Driver\Pdo::GetCol
     */
    public function getCol( $sql, $bindings = array() )
    {
        $rows = $this->getAll( $sql, $bindings );

        $cols = array();
        if ( $rows && is_array( $rows ) && count( $rows ) > 0 ) {
            foreach ( $rows as $row ) {
                $cols[] = array_shift( $row );
            }
        }

        return $cols;
    }

    /**
     * @see \Core\Database\Driver\Pdo::GetCell
     */
    public function getCell( $sql, $bindings = array() )
    {
        $col1 = null;
        $row1 = null;
        $arr  = $this->getAll( $sql, $bindings );

        if (false === empty($arr)) {
            $row1 = array_shift($arr);
        }

        if (false === empty($row1)) {
            $col1 = array_shift($row1);
        }

        return $col1;
    }

    /**
     * @see \Core\Database\Driver\Pdo::GetRow
     */
    public function getRow( $sql, $bindings = array() )
    {
        $arr = $this->getAll( $sql, $bindings );

        return array_shift( $arr );
    }

    /**
     * @see \Core\Database\Driver\Pdo::findByBinding
     */
    public function findByBinding($class, $bindings = array(), array $sqlParams = array(), $limit = 0)
    {
        $sql = 'SELECT SQL_CACHE a.* FROM ' . $class . ' AS a ';

        if (false === empty($bindings)) {
            $sql .= 'WHERE 1=1 ';

            foreach ($bindings as $keyIndentifier => $dataIdentifier) {
                $sql .= 'AND a.' . $keyIndentifier . ' = :' . $keyIndentifier . ' ';
            }
        }

        $groupBy = (false === empty($sqlParams['group_by']) ? $sqlParams['group_by'] : 'a.id');
        $orderBy = (false === empty($sqlParams['order_by']) ? $sqlParams['order_by'] : 'a.id DESC');

        $sql .= 'GROUP BY ' . $groupBy . ' ORDER BY ' . $orderBy . ' ';

        if ((int) $limit > 0 || false === empty($limit)) {
            $sql .= 'LIMIT ' . ($limit) ;
        }

        $sql .= '-- keep-cache';

        return  $this->getAll($sql, $bindings);
    }

    /**
     * @see \Core\Database\Driver\Pdo::Excecute
     */
    public function execute( $sql, $bindings = array() )
    {
        $this->runQuery( $sql, $bindings );

        return $this->affectedRows;
    }

    /**
     * @see \Core\Database\Driver\Pdo::getInsertID
     */
    public function getInsertID()
    {
        $this->connect();

        return (int) $this->pdo->lastInsertId();
    }

    /**
     * @see \Core\Database\Driver\Pdo::::getColumns
     */
    public function getColumns( $type, $extendedInfo = false )
    {
        $this->connect();
        $table  = $type;
        $table  = $this->esc( $table );
        if (false === $extendedInfo) {
            $sql = sprintf('SELECT a.column_name as `name` FROM information_schema.columns AS a WHERE a.table_name = "%s"', $table);
        } else {
            $sql = sprintf('SHOW COLUMNS FROM %s', $table);
        }


        return  $this->getAll($sql, array());
    }

    /**
     * @see \Core\Database\Driver\Pdo::affectedRows
     */
    public function affectedRows()
    {
        $this->connect();

        return (int) $this->affectedRows;
    }

    /**
     * Toggles debug mode. In debug mode the driver will print all
     * SQL to the screen together with some information about the
     * results.
     *
     * @param boolean        $trueFalse turn on/off
     * @param RedBean_Logger $logger    logger instance
     *
     * @return void
     */
    public function setDebugMode( $tf, $logger = NULL )
    {
        $this->connect();

        $this->debug = (bool) $tf;

        if ( $this->debug and !$logger ) {
            $logger = new RedBean_Logger_Default();
        }

        $this->setLogger( $logger );
    }

    /**
     * Injects RedBean_Logger object.
     * Sets the logger instance you wish to use.
     *
     * @param RedBean_Logger $logger the logger instance to be used for logging
     */
    public function setLogger( RedBean_Logger $logger )
    {
        $this->logger = $logger;
    }

    /**
     * Sets the PDO fetch type you wish to use.
     *
     * @param \PDO $fetchType (Optional) \PDO Fetch type, default \PDO::FETCH_ASSOC
     * @param string $class  (Optional)   Class to use in fetch if using \PDO::FETCH_CLASS fetch type
     */
    public function setFetchType($fetchType = \PDO::FETCH_ASSOC, $class = null)
    {
        $this->_fetchType = array($fetchType, $class);

        return $this;
    }

    /**
     * Gets RedBean_Logger object.
     * Returns the currently active RedBean_Logger instance.
     *
     * @return RedBean_Logger
     */
    public function getLogger()
    {
        return $this->logger;
    }

    /**
     * @see \Core\Database\Driver\Pdo::startTransaction
     */
    public function startTransaction()
    {
        $this->connect();

        $this->pdo->beginTransaction();
    }

    /**
     * @see \Core\Database\Driver\Pdo::commitTrans
     */
    public function commitTransaction()
    {
        $this->connect();

        $this->pdo->commit();
    }

    /**
     * @see \Core\Database\Driver\Pdo::rollbackTrans
     */
    public function rollbackTransaction()
    {
        $this->connect();

        $this->pdo->rollback();
    }

    /**
     * Returns the name of database driver for \PDO.
     * Uses the \PDO attribute DRIVER NAME to obtain the name of the
     * \PDO driver.
     *
     * @return string
     */
    public function getDatabaseType()
    {
        $this->connect();

        return $this->pdo->getAttribute( \PDO::ATTR_DRIVER_NAME );
    }

    /**
     * Returns the version number of the database.
     *
     * @return mixed $version version number of the database
     */
    public function getDatabaseVersion()
    {
        $this->connect();

        return $this->pdo->getAttribute( \PDO::ATTR_CLIENT_VERSION );
    }

    /**
     * Returns the underlying PHP \PDO instance.
     *
     * @return \PDO
     */
    public function getPDO()
    {
        $this->connect();

        return $this->pdo;
    }

    /**
     * Closes database connection by destructing \PDO.
     *
     * @return void
     */
    public function close()
    {
        $this->pdo         = NULL;
        $this->isConnected = FALSE;
    }

    /**
     * Returns TRUE if the current \PDO instance is connected.
     *
     * @return boolean
     */
    public function isConnected()
    {
        return $this->isConnected && $this->pdo;
    }
}