<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$router->prefix(ADMIT_PATH_PREFIX)->name(ADMIN_NAME_PREFIX)->group(function() use($router){
    $router->post('login',['as'=>'login','uses'=>'AuthenticationController@login'])->withoutMiddleware('api');
    $router->get('logout',['as'=>'logout','uses'=>'AuthenticationController@logout']);
});