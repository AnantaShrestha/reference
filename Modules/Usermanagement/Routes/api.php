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

$router->prefix('admin/usermanagement')->name('admin.usermanagement.')->group(function() use($router){
    //permission routes
    $router->prefix('permission')->name('permission.')->group(function() use($router){
        $router->get('/',['as'=>'index','uses'=>'PermissionController@index']);
        $router->post('store',['as'=>'store','uses'=>'PermissionController@store']);
        $router->get('edit/{id}',['as'=>'edit','uses'=>'PermissionController@edit']);
        $router->put('edit/{id}',['as'=>'update','uses'=>'PermissionController@update']);
        $router->delete('delete/{id}',['as'=>'delete','uses'=>'PermissionController@delete']);
        $router->get('routeList',['as'=>'routeList','uses'=>'PermissionController@routeList']);
    });
    //role routes
    $router->prefix('role')->name('role.')->group(function() use($router){
        $router->get('/',['as'=>'index','uses'=>'RoleController@index']);
        $router->post('store',['as'=>'store','uses'=>'RoleController@store']);
        $router->get('edit/{id}',['as'=>'edit','uses'=>'RoleController@edit']);
        $router->put('edit/{id}',['as'=>'update','uses'=>'RoleController@update']);
        $router->delete('delete/{id}',['as'=>'delete','uses'=>'RoleController@delete']);
    });

    //user routes
    $router->prefix('user')->name('user.')->group(function() use($router){
        $router->get('/',['as'=>'index','uses'=>'UserController@index']);
        $router->post('store',['as'=>'store','uses'=>'UserController@store']);
        $router->get('edit/{id}',['as'=>'edit','uses'=>'UserController@edit']);
        $router->put('edit/{id}',['as'=>'update','uses'=>'UserController@update']);
        $router->delete('delete/{id}',['as'=>'delete','uses'=>'UserController@delete']);
    });
});