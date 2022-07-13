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

$router->prefix('admin/chat')->name('admin.chat.')->group(function() use($router){
	$router->get('users',['as'=>'users','uses'=>'ChatController@users']);
});