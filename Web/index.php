<?php

require_once __DIR__ . '/../vendor/autoload.php';

$view = new \TYPO3Fluid\Fluid\View\TemplateView();

$context = new \TYPO3Fluid\Fluid\Core\Rendering\RenderingContext($view);

$context->setControllerName('MyController');
$context->setControllerAction('Homepage');


$menu = [
    'homepage' => [
        'title' => 'Home',
    ],
    'firstpage' => [
        'title' => 'Firstpage',
    ],
    'secondpage' => [
        'title' => 'Secondpage',
    ],
    'thirdpage' => [
        'title' => 'Thirdpage',
    ],
];

$pages =["homepage", "firstpage", "secondpage", "thirdpage"];
$route = (isset($_GET['route'])? $_GET['route'] : "homepage");
$route = "homepage";
if(isset($_GET['route']))
{
    $route = $_GET['route'];
}

$route = strtolower($route);
if(isset($menu[$route])){
    $menu[$route]['active'] = true;
    $context->setControllerAction($route);
}
else{
    $context->setControllerAction('404');
}
//***********************************************************************
//Shorthand for if else
//$context->setControllerAction(in_array($route,$pages)? $route : '404');
//***********************************************************************

$paths = new \TYPO3Fluid\Fluid\View\TemplatePaths();
$paths->setTemplateRootPaths([__DIR__ . '/../Resources/Private/Templates/']);
$paths->setLayoutRootPaths([__DIR__ . '/../Resources/Private/Layouts/']);
$paths->setPartialRootPaths([__DIR__ . '/../Resources/Private/Partials/']);

$context->setTemplatePaths($paths);
$view->setRenderingContext($context);
$view->assignMultiple([
    'name' => 'Joey',
    'menu' => $menu
]);

$output = $view->render();

echo $output;