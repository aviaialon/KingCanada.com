<?php
/**
 * Abstract Query Writer
 *
 * @file    Database//Driver/QueryWriter/AQueryWriter.php
 * @desc    Query Writer (abstract class)
 * @author  Avi Aialon (deviantlogic.ca)
 * @license BSD/GPLv2
 *
 * Represents an abstract Database
 * To write a driver for a different database for RedBean
 * Contains a number of functions all implementors can
 * inherit or override.
 *
 * (c) copyright Avi Aialon (aviaialon@gmail.com).
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */
namespace Core\Database\Driver\QueryWriter;

/**
 * Abstract Query Writer
 *
 * @file    Database//Driver/QueryWriter/AQueryWriter.php
 * @desc    Query Writer (abstract class)
 * @author  Avi Aialon (deviantlogic.ca)
 * @license BSD/GPLv2
 *
 * Represents an abstract Database
 * To write a driver for a different database for RedBean
 * Contains a number of functions all implementors can
 * inherit or override.
 *
 * (c) copyright Avi Aialon (aviaialon@gmail.com).
 * This source file is subject to the BSD/GPLv2 License that is bundled
 * with this source code in the file license.txt.
 */
abstract class AQueryWriter 
{
	/**
	 * @var \DBAdapter
	 */
	protected $adapter;

	/**
	 * @var string
	 */
	protected $defaultValue = 'NULL';

	/**
	 * @var string
	 */
	protected $quoteCharacter = '';

	/**
	 * @var boolean
	 */
	protected $flagUseCache = FALSE;

	/**
	 * @var array
	 */
	protected $cache = array();

	/**
	 * @var array
	 */
	protected static $renames = array();

	/**
	 * @var array
	 */
	public $typeno_sqltype = array();

	/**
	 * Generates a list of parameters (slots) for an SQL snippet.
	 * This method calculates the correct number of slots to insert in the
	 * SQL snippet and determines the correct type of slot. If the bindings
	 * array contains named parameters this method will return named ones and
	 * update the keys in the value list accordingly (that's why we use the &).
	 *
	 * If you pass an offset the bindings will be re-added to the value list.
	 * Some databases cant handle duplicate parameter names in queries.
	 *
	 * @param array   &$valueList     list of values to generate slots for (gets modified if needed)
	 * @param array   $otherBindings  list of additional bindings
	 * @param integer $offset         start counter at...
	 *
	 * @return string
	 */
	protected function getParametersForInClause( &$valueList, $otherBindings, $offset = 0 )
	{
		if ( is_array( $otherBindings ) && count( $otherBindings ) > 0 ) {
			reset( $otherBindings );

			$key = key( $otherBindings );

			if ( !is_numeric($key) ) {
				$filler  = array();
				$newList = (!$offset) ? array() : $valueList;
				$counter = $offset;

				foreach( $valueList as $value ) {
					$slot           = ':slot' . ( $counter++ );
					$filler[]       = $slot;
					$newList[$slot] = $value;
				}

				// Change the keys!
				$valueList = $newList;

				return implode( ',', $filler );
			}
		}

		return implode( ',', array_fill( 0, count( $valueList ), '?' ) );
	}

	/**
	 * Returns a cache key for the cache values passed.
	 * This method returns a fingerprint string to be used as a key to store
	 * data in the writer cache.
	 *
	 * @param array $keyValues key-value to generate key for
	 *
	 * @return string
	 */
	private function getCacheKey( $keyValues )
	{
		return json_encode( $keyValues );
	}

	/**
	 * Returns the values associated with the provided cache tag and key.
	 *
	 * @param string $cacheTag cache tag to use for lookup
	 * @param string $key      key to use for lookup
	 *
	 * @return mixed
	 */
	private function getCached( $cacheTag, $key )
	{
		$sql = $this->getSQL();

		if ( strpos( $sql, '-- keep-cache' ) !== strlen( $sql ) - 13 ) {
			// If SQL has been taken place outside of this method then something else then
			// a select query might have happened! (or instruct to keep cache)
			$this->cache = array();
		} else {
			if ( isset( $this->cache[$cacheTag][$key] ) ) {
				return $this->cache[$cacheTag][$key];
			}
		}

		return NULL;
	}

	/**
	 * Stores data from the writer in the cache under a specific key and cache tag.
	 * A cache tag is used to make sure the cache remains consistent. In most cases the cache tag
	 * will be the bean type, this makes sure queries associated with a certain reference type will
	 * never contain conflicting data.
	 * You can only store one item under a cache tag. Why not use the cache tag as a key? Well
	 * we need to make sure the cache contents fits the key (and key is based on the cache values).
	 * Otherwise it would be possible to store two different result sets under the same key (the cache tag).
	 *
	 * @param string $cacheTag cache tag (secondary key)
	 * @param string $key      key
	 * @param array  $values   content to be stored
	 *
	 * @return void
	 */
	private function putResultInCache( $cacheTag, $key, $values )
	{
		$this->cache[$cacheTag] = array(
			$key => $values
		);
	}

	/**
	 * Creates an SQL snippet from a list of conditions of format:
	 *
	 * array(
	 *    key => array(
	 *           value1, value2, value3 ....
	 *        )
	 * )
	 *
	 * @param array  $conditions list of conditions
	 * @param array  $bindings   parameter bindings for SQL snippet
	 * @param string $addSql     SQL snippet
	 *
	 * @return string
	 */
	private function makeSQLFromConditions( $conditions, &$bindings, $addSql = '' )
	{
		reset( $bindings );
		$firstKey       = key( $bindings );
		$paramTypeIsNum = ( is_numeric( $firstKey ) );
		$counter        = 0;

		$sqlConditions = array();
		foreach ( $conditions as $column => $values ) {
			if ( !count( $values ) ) continue;

			$sql = $this->esc( $column );
			$sql .= ' IN ( ';

			if ( !is_array( $values ) ) $values = array( $values );

			// If it's safe to skip bindings, do so...
			if ( ctype_digit( implode( '', $values ) ) ) {
				$sql .= implode( ',', $values ) . ' ) ';

				// only numeric, cant do much harm
				$sqlConditions[] = $sql;
			} else {

				if ( $paramTypeIsNum ) {
					$sql .= implode( ',', array_fill( 0, count( $values ), '?' ) ) . ' ) ';

					array_unshift($sqlConditions, $sql);

					foreach ( $values as $k => $v ) {
						$values[$k] = strval( $v );

						array_unshift( $bindings, $v );
					}
				} else {

					$slots = array();

					foreach( $values as $k => $v ) {
						$slot            = ':slot'.$counter++;
						$slots[]         = $slot;
						$bindings[$slot] = strval( $v );
					}

					$sql .= implode( ',', $slots ).' ) ';
					$sqlConditions[] = $sql;
				}
			}
		}

		$sql = '';
		if ( is_array( $sqlConditions ) && count( $sqlConditions ) > 0 ) {
			$sql = implode( ' AND ', $sqlConditions );
			$sql = " WHERE ( $sql ) ";

			if ( $addSql ) $sql .= $addSql;
		} elseif ( $addSql ) {
			$sql = $addSql;
		}

		return $sql;
	}

	/**
	 * Returns the table names and column names for a relational query.
	 *
	 * @param string  $sourceType type of the source bean
	 * @param string  $destType   type of the bean you want to obtain using the relation
	 * @param boolean $noQuote    TRUE if you want to omit quotes
	 *
	 * @return array
	 */
	private function getRelationalTablesAndColumns( $sourceType, $destType, $noQuote = FALSE )
	{
		$linkTable   = $this->esc( $this->getAssocTable( array( $sourceType, $destType ) ), $noQuote );
		$sourceCol   = $this->esc( $sourceType . '_id', $noQuote );

		if ( $sourceType === $destType ) {
			$destCol = $this->esc( $destType . '2_id', $noQuote );
		} else {
			$destCol = $this->esc( $destType . '_id', $noQuote );
		}

		$sourceTable = $this->esc( $sourceType, $noQuote );
		$destTable   = $this->esc( $destType, $noQuote );

		return array( $sourceTable, $destTable, $linkTable, $sourceCol, $destCol );
	}

	/**
	 * Returns the sql that should follow an insert statement.
	 *
	 * @param string $table name
	 *
	 * @return string
	 */
	protected function getInsertSuffix( $table )
	{
		return '';
	}

	/**
	 * Checks whether a value starts with zeros. In this case
	 * the value should probably be stored using a text datatype instead of a
	 * numerical type in order to preserve the zeros.
	 *
	 * @param string $value value to be checked.
	 *
	 * @return boolean
	 */
	protected function startsWithZeros( $value )
	{
		$value = strval( $value );

		if ( strlen( $value ) > 1 && strpos( $value, '0' ) === 0 && strpos( $value, '0.' ) !== 0 ) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	/**
	 * Inserts a record into the database using a series of insert columns
	 * and corresponding insertvalues. Returns the insert id.
	 *
	 * @param string $table         table to perform query on
	 * @param array  $insertcolumns columns to be inserted
	 * @param array  $insertvalues  values to be inserted
	 *
	 * @return integer
	 */
	protected function insertRecord( $type, $insertcolumns, $insertvalues )
	{
		$default = $this->defaultValue;
		$suffix  = $this->getInsertSuffix( $type );
		$table   = $this->esc( $type );
		
		if ( count( $insertvalues ) > 0 && is_array( $insertvalues[0] ) && count( $insertvalues[0] ) > 0 ) {
			foreach ( $insertcolumns as $k => $v ) {
				$insertcolumns[$k] = $this->esc( $v );
			}

			$insertSQL = "INSERT INTO $table ( id, " . implode( ',', $insertcolumns ) . " ) VALUES
			( $default, " . implode( ',', array_fill( 0, count( $insertcolumns ), ' ? ' ) ) . " ) $suffix";

			$ids = array();
			foreach ( $insertvalues as $i => $insertvalue ) {
				$ids[] = $this->getCell( $insertSQL, $insertvalue, $i );
			}

			$result = count( $ids ) === 1 ? array_pop( $ids ) : $ids;
		} else {
			$result = $this->getCell( "INSERT INTO $table (id) VALUES($default) $suffix" );
		}

		if ( $suffix ) return $result;

		$last_id = $this->getInsertID();

		return $last_id;
	}

	/**
	 * Checks table name or column name.
	 *
	 * @param string $table table string
	 *
	 * @return string
	 *
	 * @throws RedBean_Exception_Security
	 */
	protected function check( $struct )
	{
		/*if ( !preg_match( '/^[a-zA-Z0-9_]+$/', $struct ) ) {
			throw new \Exception( 'Identifier does not conform to security policies.' );
		}*/

		return $struct;
	}

	/**
	 * Checks whether a number can be treated like an int.
	 *
	 * @param  string $value string representation of a certain value
	 *
	 * @return boolean
	 */
	public static function canBeTreatedAsInt( $value )
	{
		return (bool) ( ctype_digit( strval( $value ) ) && strval( $value ) === strval( intval( $value ) ) );
	}

	/**
	 * @see RedBean_QueryWriter::getAssocTableFormat
	 */
	public static function getAssocTableFormat( $types )
	{
		sort( $types );

		$assoc = implode( '_', $types );

		return ( isset( self::$renames[$assoc] ) ) ? self::$renames[$assoc] : $assoc;
	}

	/**
	 * @see RedBean_QueryWriter::renameAssociation
	 */
	public static function renameAssociation( $from, $to = NULL )
	{
		if ( is_array( $from ) ) {
			foreach ( $from as $key => $value ) self::$renames[$key] = $value;

			return;
		}

		self::$renames[$from] = $to;
	}

	/**
	 * Checks whether the specified type (i.e. table) already exists in the database.
	 * Not part of the Object Database interface!
	 *
	 * @param string $table table name
	 *
	 * @return boolean
	 */
	public function tableExists( $table )
	{
		$tables = $this->getTables();

		return in_array( $table, $tables );
	}

	/**
	 * @see RedBean_QueryWriter::glueSQLCondition
	 */
	public function glueSQLCondition( $sql, $glue = NULL )
	{
		static $snippetCache = array();

		if ( trim( $sql ) === '' ) {
			return $sql;
		}

		$key = $glue . '|' . $sql;

		if ( isset( $snippetCache[$key] ) ) {
			return $snippetCache[$key];
		}

		$lsql = ltrim( $sql );

		if ( preg_match( '/^(AND|OR|INNER|LEFT|RIGHT|JOIN|WHERE|ORDER|GROUP|HAVING|LIMIT|OFFSET)\s+/i', $lsql ) ) {
			if ( $glue === RedBean_QueryWriter::C_GLUE_WHERE && stripos( $lsql, 'AND' ) === 0 ) {
				$snippetCache[$key] = ' WHERE ' . substr( $lsql, 3 );
			} else {
				$snippetCache[$key] = $sql;
			}
		} else {
			$snippetCache[$key] = ( ( $glue === 2 ) ? ' AND ' : ' WHERE ') . $sql;
		}

		return $snippetCache[$key];
	}

	/**
	 * @see RedBean_QueryWriter::esc
	 */
	public function esc( $dbStructure, $dontQuote = FALSE )
	{
		$this->check( $dbStructure );

		return ( $dontQuote ) ? $dbStructure : $this->quoteCharacter . $dbStructure . $this->quoteCharacter;
	}

	/**
	 * @see RedBean_QueryWriter::addColumn
	 */
	public function addColumn( $type, $column, $field )
	{
		$table  = $type;
		$type   = $field;
		$table  = $this->esc( $table );
		$column = $this->esc( $column );

		$type = ( isset( $this->typeno_sqltype[$type] ) ) ? $this->typeno_sqltype[$type] : '';

		$this->execute( "ALTER TABLE $table ADD $column $type " );
	}

	/**
	 * @see RedBean_QueryWriter::updateRecord
	 */
	public function updateRecord( $type, $updatevalues, $id = NULL )
	{
		$table = $type;

		if ( !$id ) {
			$insertcolumns = $insertvalues = array();

			foreach ( $updatevalues as $column => $data ) {
				$insertcolumns[] = '`' . $column . '`';
				$insertvalues[]  = $data;
			}
			
			return $this->insertRecord( $table, $insertcolumns, array( $insertvalues ) );
		}

		if ( $id && !count( $updatevalues ) ) {
			return $id;
		}

		$table = $this->esc( $table );
		$sql   = "UPDATE $table SET ";

		$p = $v = array();

		foreach ( $updatevalues as $column => $nData ) {
			$p[] = " {$this->esc($column)} = ? ";
			$v[] = $nData;
		}

		$sql .= implode( ',', $p ) . ' WHERE id = ? ';
		$v[] = $id;
			
		$this->execute( $sql, $v );

		return $id;
	}

	/**
	 * @see RedBean_QueryWriter::queryRecord
	 */
	public function queryRecord( $type, $conditions = array(), $addSql = NULL, $bindings = array(), $columns = array() )
	{
		$addSql = $this->glueSQLCondition( $addSql, ( count($conditions) > 0) ? 2 : NULL );

		$key = NULL;
		if ( $this->flagUseCache ) {
			$key = $this->getCacheKey( array( $conditions, $addSql, $bindings, 'select' ) );

			if ( $cached = $this->getCached( $type, $key ) ) {
				return $cached;
			}
		}

		$table = $this->esc( $type );

		$sql   = $this->makeSQLFromConditions( $conditions, $bindings, $addSql );
		$sql   = "SELECT * FROM {$table} {$sql} -- keep-cache";

		$rows  = $this->getAll( $sql, $bindings );

		if ( $this->flagUseCache && $key ) {
			$this->putResultInCache( $type, $key, $rows );
		}

		return $rows;
	}

	/**
	 * @see RedBean_QueryWriter::queryRecordRelated
	 */
	public function queryRecordRelated( $sourceType, $destType, $linkIDs, $addSql = '', $bindings = array() )
	{
		$addSql = $this->glueSQLCondition( $addSql, RedBean_QueryWriter::C_GLUE_WHERE );

		list( $sourceTable, $destTable, $linkTable, $sourceCol, $destCol ) = $this->getRelationalTablesAndColumns( $sourceType, $destType );

		$key = $this->getCacheKey( array( $sourceType, $destType, implode( ',', $linkIDs ), $addSql, $bindings ) );

		if ( $this->flagUseCache && $cached = $this->getCached( $destType, $key ) ) {
			return $cached;
		}

		$inClause = $this->getParametersForInClause( $linkIDs, $bindings );

		if ( $sourceType === $destType ) {
			$inClause2 = $this->getParametersForInClause( $linkIDs, $bindings, count( $bindings ) ); //for some databases
			$sql = "
			SELECT
				{$destTable}.*,
				COALESCE(
				NULLIF({$linkTable}.{$sourceCol}, {$destTable}.id),
				NULLIF({$linkTable}.{$destCol}, {$destTable}.id)) AS linked_by
			FROM {$linkTable}
			INNER JOIN {$destTable} ON
			( {$destTable}.id = {$linkTable}.{$destCol} AND {$linkTable}.{$sourceCol} IN ($inClause) ) OR
			( {$destTable}.id = {$linkTable}.{$sourceCol} AND {$linkTable}.{$destCol} IN ($inClause2) )
			{$addSql}
			-- keep-cache";

			$linkIDs = array_merge( $linkIDs, $linkIDs );
		} else {
			$sql = "
			SELECT
				{$destTable}.*,
				{$linkTable}.{$sourceCol} AS linked_by
			FROM {$linkTable}
			INNER JOIN {$destTable} ON
			( {$destTable}.id = {$linkTable}.{$destCol} AND {$linkTable}.{$sourceCol} IN ($inClause) )
			{$addSql}
			-- keep-cache";
		}

		$bindings = array_merge( $linkIDs, $bindings );

		$rows = $this->get( $sql, $bindings );

		$this->putResultInCache( $destType, $key, $rows );

		return $rows;
	}

	/**
	 * @see RedBean_QueryWriter::queryRecordLinks
	 */
	public function queryRecordLinks( $sourceType, $destType, $linkIDs, $addSql = '', $bindings = array() )
	{
		$addSql = $this->glueSQLCondition( $addSql, RedBean_QueryWriter::C_GLUE_WHERE );

		list( $sourceTable, $destTable, $linkTable, $sourceCol, $destCol ) = $this->getRelationalTablesAndColumns( $sourceType, $destType );

		$key = $this->getCacheKey( array( $sourceType, $destType, implode( ',', $linkIDs ), $addSql, $bindings ) );

		if ( $this->flagUseCache && $cached = $this->getCached( $linkTable, $key ) ) {
			return $cached;
		}

		$inClause = $this->getParametersForInClause( $linkIDs, $bindings );

		$selector = "{$linkTable}.*";

		if ( $sourceType === $destType ) {
			$inClause2 = $this->getParametersForInClause( $linkIDs, $bindings, count( $bindings ) ); //for some databases
			$sql = "
			SELECT {$selector} FROM {$linkTable}
			INNER JOIN {$destTable} ON
			( {$destTable}.id = {$linkTable}.{$destCol} AND {$linkTable}.{$sourceCol} IN ($inClause) ) OR
			( {$destTable}.id = {$linkTable}.{$sourceCol} AND {$linkTable}.{$destCol} IN ($inClause2) )
			{$addSql}
			-- keep-cache";

			$linkIDs = array_merge( $linkIDs, $linkIDs );
		} else {
			$sql = "
			SELECT {$selector} FROM {$linkTable}
			INNER JOIN {$destTable} ON
			( {$destTable}.id = {$linkTable}.{$destCol} AND {$linkTable}.{$sourceCol} IN ($inClause) )
			{$addSql}
			-- keep-cache";
		}

		$bindings = array_merge( $linkIDs, $bindings );

		$rows = $this->get( $sql, $bindings );

		$this->putResultInCache( $linkTable, $key, $rows );

		return $rows;
	}

	/**
	 * @see RedBean_QueryWriter::queryRecordLink
	 */
	public function queryRecordLink( $sourceType, $destType, $sourceID, $destID )
	{
		list( $sourceTable, $destTable, $linkTable, $sourceCol, $destCol ) = $this->getRelationalTablesAndColumns( $sourceType, $destType );

		$key = $this->getCacheKey( array( $sourceType, $destType, $sourceID, $destID ) );

		if ( $this->flagUseCache && $cached = $this->getCached( $linkTable, $key ) ) {
			return $cached;
		}

		if ( $sourceTable === $destTable ) {
			$sql = "SELECT {$linkTable}.* FROM {$linkTable}
				WHERE ( {$sourceCol} = ? AND {$destCol} = ? ) OR
				 ( {$destCol} = ? AND {$sourceCol} = ? ) -- keep-cache";
			$row = $this->getRow( $sql, array( $sourceID, $destID, $sourceID, $destID ) );
		} else {
			$sql = "SELECT {$linkTable}.* FROM {$linkTable}
				WHERE {$sourceCol} = ? AND {$destCol} = ? -- keep-cache";
			$row = $this->getRow( $sql, array( $sourceID, $destID ) );
		}

		$this->putResultInCache( $linkTable, $key, $row );

		return $row;
	}

	/**
	 * @see RedBean_QueryWriter::queryRecordCount
	 */
	public function queryRecordCount( $type, $conditions = array(), $addSql = NULL, $bindings = array() )
	{
		$addSql = $this->glueSQLCondition( $addSql );

		$table  = $this->esc( $type );

		$sql    = $this->makeSQLFromConditions( $conditions, $bindings, $addSql );
		$sql    = "SELECT COUNT(*) FROM {$table} {$sql} -- keep-cache";

		return (int) $this->getCell( $sql, $bindings );
	}

	/**
	 * @see RedBean_QueryWriter::queryRecordCountRelated
	 */
	public function queryRecordCountRelated( $sourceType, $destType, $linkID, $addSql = '', $bindings = array() )
	{
		list( $sourceTable, $destTable, $linkTable, $sourceCol, $destCol ) = $this->getRelationalTablesAndColumns( $sourceType, $destType );

		if ( $sourceType === $destType ) {
			$sql = "
			SELECT COUNT(*) FROM {$linkTable}
			INNER JOIN {$destTable} ON
			( {$destTable}.id = {$linkTable}.{$destCol} AND {$linkTable}.{$sourceCol} = ? ) OR
			( {$destTable}.id = {$linkTable}.{$sourceCol} AND {$linkTable}.{$destCol} = ? )
			{$addSql}
			-- keep-cache";

			$bindings = array_merge( array( $linkID, $linkID ), $bindings );
		} else {
			$sql = "
			SELECT COUNT(*) FROM {$linkTable}
			INNER JOIN {$destTable} ON
			( {$destTable}.id = {$linkTable}.{$destCol} AND {$linkTable}.{$sourceCol} = ? )
			{$addSql}
			-- keep-cache";

			$bindings = array_merge( array( $linkID ), $bindings );
		}

		return (int) $this->getCell( $sql, $bindings );
	}

	/**
	 * @see RedBean_QueryWriter::deleteRecord
	 */
	public function deleteRecord( $type, $conditions = array(), $addSql = NULL, $bindings = array() )
	{
		$addSql = $this->glueSQLCondition( $addSql );

		$table  = $this->esc( $type );

		$sql    = $this->makeSQLFromConditions( $conditions, $bindings, $addSql );
		$sql    = "DELETE FROM {$table} {$sql}";

		$this->execute( $sql, $bindings );
	}

	/**
	 * @see RedBean_QueryWriter::deleteRelations
	 */
	public function deleteRelations( $sourceType, $destType, $sourceID )
	{
		list( $sourceTable, $destTable, $linkTable, $sourceCol, $destCol ) = $this->getRelationalTablesAndColumns( $sourceType, $destType );

		if ( $sourceTable === $destTable ) {
			$sql = "DELETE FROM {$linkTable}
				WHERE ( {$sourceCol} = ? ) OR
				( {$destCol} = ?  )
			";

			$this->execute( $sql, array( $sourceID, $sourceID ) );
		} else {
			$sql = "DELETE FROM {$linkTable}
				WHERE {$sourceCol} = ? ";

			$this->execute( $sql, array( $sourceID ) );
		}
	}

	/**
	 * @see RedBean_QueryWriter::widenColumn
	 */
	public function widenColumn( $type, $column, $datatype )
	{
		if ( !isset($this->typeno_sqltype[$datatype]) ) return;

		$table   = $type;
		$type    = $datatype;

		$table   = $this->esc( $table );
		$column  = $this->esc( $column );

		$newtype = $this->typeno_sqltype[$type];

		$this->execute( "ALTER TABLE $table CHANGE $column $column $newtype " );
	}

	/**
	 * @see RedBean_QueryWriter::wipe
	 */
	public function wipe( $type )
	{
		$table = $this->esc( $type );

		$this->execute( "TRUNCATE $table " );
	}

	/**
	 * @see RedBean_QueryWriter::addFK
	 */
	public function addFK( $type, $targetType, $field, $targetField, $isDependent = FALSE )
	{
		$table           = $this->esc( $type );
		$tableNoQ        = $this->esc( $type, TRUE );

		$targetTable     = $this->esc( $targetType );

		$column          = $this->esc( $field );
		$columnNoQ       = $this->esc( $field, TRUE );

		$targetColumn    = $this->esc( $targetField );
		$targetColumnNoQ = $this->esc( $targetField, TRUE );

		$db = $this->getCell( 'SELECT DATABASE()' );

		$fkName = 'fk_' . $tableNoQ . '_' . $columnNoQ . '_' . $targetColumnNoQ . ( $isDependent ? '_casc' : '' );
		$cName  = 'cons_' . $fkName;

		$cfks = $this->getCell( "
			SELECT CONSTRAINT_NAME
			FROM information_schema.KEY_COLUMN_USAGE
			WHERE TABLE_SCHEMA ='$db' AND TABLE_NAME = '$tableNoQ'  AND COLUMN_NAME = '$columnNoQ' AND
			CONSTRAINT_NAME <>'PRIMARY' AND REFERENCED_TABLE_NAME is not null
		" );

		$flagAddKey = FALSE;

		try {
			// No keys
			if ( !$cfks ) {
				$flagAddKey = TRUE; //go get a new key
			}

			// Has fk, but different setting, --remove
			if ( $cfks && $cfks != $cName ) {
				$this->execute( "ALTER TABLE $table DROP FOREIGN KEY $cfks " );
				$flagAddKey = TRUE; //go get a new key.
			}

			if ( $flagAddKey ) {
				$this->execute( "ALTER TABLE  $table
				ADD CONSTRAINT $cName FOREIGN KEY $fkName (  $column ) REFERENCES  $targetTable (
				$targetColumn) ON DELETE " . ( $isDependent ? 'CASCADE' : 'SET NULL' ) . ' ON UPDATE SET NULL ;' );
			}
		} catch ( Exception $e ) {
			// Failure of fk-constraints is not a problem
		}
	}

	/**
	 * @see RedBean_QueryWriter::renameAssocTable
	 */
	public function renameAssocTable( $from, $to = NULL )
	{
		self::renameAssociation( $from, $to );
	}

	/**
	 * @see RedBean_QueryWriter::getAssocTable
	 */
	public function getAssocTable( $types )
	{
		return self::getAssocTableFormat( $types );
	}

	/**
	 * @see RedBean_QueryWriter::addConstraintForTypes
	 */
	public function addConstraintForTypes( $sourceType, $destType )
	{
		list( $sourceTable, $destTable, $linkTable, $sourceCol, $destCol ) = $this->getRelationalTablesAndColumns( $sourceType, $destType, TRUE );

		$this->constrain( $linkTable, $sourceTable, $destTable, $sourceCol, $destCol );
	}

	/**
	 * Turns caching on or off. Default: off.
	 * If caching is turned on retrieval queries fired after eachother will
	 * use a result row cache.
	 *
	 * @param boolean
	 */
	public function setUseCache( $yesNo )
	{
		$this->flushCache();

		$this->flagUseCache = (bool) $yesNo;
	}

	/**
	 * Flushes the Query Writer Cache.
	 *
	 * @return void
	 */
	public function flushCache()
	{
		$this->cache = array();
	}

	/**
	 * @deprecated Use esc() instead.
	 *
	 * @param string  $column   column to be escaped
	 * @param boolean $noQuotes omit quotes
	 *
	 * @return string
	 */
	public function safeColumn( $column, $noQuotes = FALSE )
	{
		return $this->esc( $column, $noQuotes );
	}

	/**
	 * @deprecated Use esc() instead.
	 *
	 * @param string  $table    table to be escaped
	 * @param boolean $noQuotes omit quotes
	 *
	 * @return string
	 */
	public function safeTable( $table, $noQuotes = FALSE )
	{
		return $this->esc( $table, $noQuotes );
	}

	/**
	 * @deprecated Use addContraintForTypes instead.
	 *
	 * @param RedBean_OODBBean $bean1 bean
	 * @param RedBean_OODBBean $bean2 bean
	 *
	 * @return void
	 */
	public function addConstraint( RedBean_OODBBean $bean1, RedBean_OODBBean $bean2 )
	{
		$this->addConstraintForTypes( $bean1->getMeta( 'type' ), $bean2->getMeta( 'type' ) );
	}
	
	/**
	 * Sleep magic method
	 *
	 * @return void
	 */
	public function __sleep()
	{
		return array();
	}
}