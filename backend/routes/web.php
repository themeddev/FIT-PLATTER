<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\TestMeController;
use App\Http\Controllers\ElementController;
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



Route::get("/test", function(){
    return 'All good';
});

// Route::get("/element", [ElementController::class, "index"]);
// Route::get("/element/{id}", [ElementController::class, "getById"]);

Route::get('/allo', [TestMeController::class, 'index']);

