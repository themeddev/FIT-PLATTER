<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ElementController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\MealController;

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

// Public Routes
Route::get("element", [ElementController::class, 'index']);
Route::get("element/{element}", [ElementController::class, 'show']);
Route::get('element/search/{name}', [ElementController::class, 'search']);
// Route::resource('')

Route::get("meals", [MealController::class, 'index'])->name('meals.index');
Route::get("meals/{meal}", [MealController::class, 'show'])->name('meals.show');
Route::get('meals/search/{name}', [MealController::class, 'search'])->name('meals.search');


// auth Routes-----
Route::post("register", [CustomerController::class, 'register']);
Route::post("login", [CustomerController::class, 'login']);

// Protected Routes
Route::group(['middleware' => ['auth:sanctum']], function (){
    
    Route::post("element", [ElementController::class, 'store']);
    Route::put("element/{element}", [ElementController::class, 'update']);
    Route::delete("element/{element}", [ElementController::class, 'destroy']);

    // Meal Routes
    // Route::post("meal", [MealController::class, 'store']);
    Route::put("meals/{meal}", [MealController::class, 'update']);
    Route::delete("meals/{meal}", [MealController::class, 'destroy']);
    
    //  Order Routes
    Route::get("order", [OrderController::class, 'index']);
    Route::post("order", [OrderController::class, 'order']);    
    Route::get("order/{order}", [OrderController::class, 'show']);    
    Route::put("order/{order}", [OrderController::class, 'update']);    
    Route::delete("order/{order}", [OrderController::class, 'destroy']);  
    
});

// Route::resource("element", ElementController::class);
Route::get("reco", [OrderController::class, 'reco']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
