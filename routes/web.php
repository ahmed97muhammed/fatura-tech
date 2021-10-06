<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/systemusers', 'UserController@systemusers');

Route::get('get_system_users_info','UserController@get_system_users_info');

Route::post('deleteuser_ajax_url','UserController@deleteuser_ajax_url');

Route::post('update_permision_ajax','UserController@update_permision_ajax');