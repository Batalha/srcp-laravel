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




Route::group(['middleware'=>'jwt.auth','prefix' => 'srcp'], function () {
    Route::get('me',  'Api\AuthController@me');
    Route::resource('cliente', 'srcp\ClienteController');
    Route::resource('servico', 'srcp\ServicoController');
    Route::post('chamado/lista', 'srcp\ChamadoController@listaDados');
    Route::post('chamado/gerarpdf', 'srcp\ChamadoController@gerarPdf');
    Route::resource('chamado', 'srcp\ChamadoController');
});

    Route::post('login',  'Api\AuthController@login');
    Route::post('refresh',  'Api\AuthController@refresh');
    Route::get('logout',  'Api\AuthController@logout');

    Route::get('home', 'HomeController@index')->name('home');

    Route::get('/{srcp}', function () {
        return view('srcp');
    });

    Route::get('/', function () {
        return view('srcp');
    });







//Route::group(['prefix' => 'srcp'], function () {
//    Route::get('me',  'Api\AuthController@me');
//    Route::resource('cliente', 'srcp\ClienteController');
//    Route::resource('servico', 'srcp\ServicoController');
//    Route::resource('chamado', 'srcp\ChamadoController');
//});
