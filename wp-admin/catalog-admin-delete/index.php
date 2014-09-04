<?php
require_once('../admin.php' );
require_once '../../catalog/Core/Application.php';
$Application = \Core\Application::getInstance(array(
    $_SERVER['DOCUMENT_ROOT'] . '/dev/king/wp-admin/catalog-admin/mvc/config/config.ini'
));

\Core\Net\HttpRequest::getInstance()->run();