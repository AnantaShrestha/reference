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
	$router->get('user/message/{id}',['as'=>'user.message','uses'=>'MessageController@index']);
	$router->post('user/message/store',['as'=>"user.message.store",'uses'=>'MessageController@store']);
	$router->get('users',['as'=>'users','uses'=>'ChatController@users']);
});