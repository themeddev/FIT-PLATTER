<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ElementController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\MealsElementController;
use App\Http\Controllers\GoalController;
use App\Http\Controllers\SmallTableController;

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
Route::get("elements", [ElementController::class, 'index']);
Route::get("elements/{element}", [ElementController::class, 'show']);
Route::get('elements/search/{name}', [ElementController::class, 'search']);

// Meals Routes
Route::get("meals", [MealController::class, 'index'])->name('meals.index');
Route::post("meals", [MealController::class, 'store'])->name('meals.store');
Route::get("meals/{meal}", [MealController::class, 'show'])->name('meals.show');
Route::get('meals/search/{name}', [MealController::class, 'search'])->name('meals.search');
// meals_elements Routes
Route::post('/meals_elements', [MealsElementController::class, 'store']);

// Auth Routes
Route::post("register", [CustomerController::class, 'register']);
Route::post("login", [CustomerController::class, 'login']);
// customer routres
Route::get('customer/{customer_id}', [CustomerController::class, 'getUserData']);
Route::post('customer/{customer_id}/update', [CustomerController::class, 'update']);

Route::resource('orders', OrderController::class)->except(['create', 'edit']); // Order routes

// smallTable
Route::get('smallTable', [SmallTableController::class, 'index']);

// Protected Routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post("elements", [ElementController::class, 'store']);
    Route::put("elements/{element}", [ElementController::class, 'update']);
    Route::delete("elements/{element}", [ElementController::class, 'destroy']);
    
    // Goals Routes
    Route::resource("goal", GoalController::class);

    Route::get("reco", [OrderController::class, 'reco']); // Recommendation route
   

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
