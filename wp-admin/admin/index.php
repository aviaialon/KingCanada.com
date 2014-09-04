<?php
require_once('../admin.php' );
require_once '../Core/Application.php';
$Application = \Core\Application::getInstance(array(
    $_SERVER['DOCUMENT_ROOT'] . getenv('BASE') . '/mvc/config/config.ini'
));
\Core\Net\HttpRequest::getInstance()->run();