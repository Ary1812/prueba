<?php
include_once 'controllers/db.php';
include_once 'controllers/landingController.php';
include_once 'controllers/userController.php';
include_once 'controllers/categoryController.php';
include_once 'controllers/productController.php';



if (!isset($_REQUEST['c'])) {
    /* require_once __DIR__ . '/public/inicio.html'; */
    $controller = new LandingController();
    $controller->index();
} else {

    $controller = ($_REQUEST['c']);
    $action = isset($_REQUEST['a']) ? $_REQUEST['a'] : 'index';

    require_once "controllers/" . $controller . "Controller.php";
    $controller = ucwords($controller) . 'Controller';
    $controller = new $controller;

    /* $action = $_REQUEST['c'];*/
    call_user_func(array($controller, $action));
}
