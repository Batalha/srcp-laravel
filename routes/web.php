<?php

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
    return view('srcp');
});

Route::group(['prefix' => 'srcp'], function (){
    Route::resource('cliente', 'srcp\ClienteController');
    Route::resource('servico', 'srcp\ServicoController');
});


Route::get('/home', 'HomeController@index')->name('home');
