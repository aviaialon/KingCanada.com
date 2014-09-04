<?php
/**
 * Interface for database drivers
 *
 * @file       Database/DriverInterface.php
 * @desc       Describes the API for database classes
 * @author     Avi Aialon
 * @license    BSD/GPLv2
 *
 * The Driver API conforms to the ADODB pseudo standard
 * for database drivers.
 *
 * copyright (c) Avi Aialon (DeviantLogic)
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */

namespace Core\Database;

interface DriverInterface
{

	/**
	 * Returns an static instance
	 *
	 * @return Core\Database\DriverInterface
	 */
	public static function getInstance($dsn, $user = null, $pass = null, $autoSetEncoding = true);
	
	/**
	 * Runs a query and fetches results as a multi dimensional array.
	 *
	 * @param string $sql      SQL to be executed
	 * @param array  $bindings list of values to bind to SQL snippet
	 *
	 * @return array
	 */
	public function getAll( $sql, $bindings = array() );

	/**
	 * Runs a query and fetches results as a column.
	 *
	 * @param string $sql      SQL Code to execute
	 * @param array  $bindings list of values to bind to SQL snippet
	 *
	 * @return array
	 */
	public function getCol( $sql, $bindings = array() );

	/**
	 * Runs a query and returns results as a single cell.
	 *
	 * @param string $sql      SQL to execute
	 * @param array  $bindings list of values to bind to SQL snippet
	 *
	 * @return mixed
	 */
	public function getCell( $sql, $bindings = array() );
	
	/**
	 * Runs a query and returns results as an associative array
	 * indexed by the first column.
	 *
	 * @param string $sql      SQL to execute
	 * @param array  $bindings list of values to bind to SQL snippet
	 *
	 * @return mixed
	 */
	public function getAssocRow( $sql, $bindings = array() );
	
	/**
	 * Runs a query and returns a flat array containing the values of
	 * one row.
	 *
	 * @param string $sql      SQL to execute
	 * @param array  $bindings list of values to bind to SQL snippet
	 * 
	 * @return array
	 */
	public function getRow( $sql, $bindings = array() );

	/**
	 * Executes SQL code and allows key-value binding.
	 * This function allows you to provide an array with values to bind
	 * to query parameters. For instance you can bind values to question
	 * marks in the query. Each value in the array corresponds to the
	 * question mark in the query that matches the position of the value in the
	 * array. You can also bind values using explicit keys, for instance
	 * array(":key"=>123) will bind the integer 123 to the key :key in the
	 * SQL. This method has no return value.
	 *
	 * @param string $sql      SQL Code to execute
	 * @param array  $bindings list of values to bind to SQL snippet
	 *
	 * @return array Affected Rows
	 */
	public function execute( $sql, $bindings = array() );

	/**
	 * Returns the latest insert ID if driver does support this
	 * feature.
	 *
	 * @return integer
	 */
	public function getInsertID();

	/**
	 * Returns the number of rows affected by the most recent query
	 * if the currently selected driver driver supports this feature.
	 *
	 * @return integer
	 */
	public function affectedRows();

	/**
	 * Toggles debug mode. In debug mode the driver will print all
	 * SQL to the screen together with some information about the
	 * results. All SQL code that passes through the driver will be
	 * passes on to the screen for inspection.
	 * This method has no return value.
	 *
	 * @param boolean $trueFalse turn on/off
	 *
	 * @return void
	 */
	public function setDebugMode( $tf );

	/**
	 * Starts a transaction.
	 *
	 * @return void
	 */
	public function commitTransaction();

	/**
	 * Commits a transaction.
	 *
	 * @return void
	 */
	public function startTransaction();

	/**
	 * Rolls back a transaction.
	 *
	 * @return void
	 */
	public function rollbackTransaction();
	
	/**
	 * Sets the PDO fetch type you wish to use.
	 *
	 * @param \PDO $fetchType (Optional) \PDO Fetch type, default \PDO::FETCH_ASSOC
	 * @param string $class (Optional)   Class to use in fetch if using \PDO::FETCH_CLASS fetch type
	 * @return void
	 */
	public function setFetchType($fetchType = \PDO::FETCH_ASSOC, $class = null);
}