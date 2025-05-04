<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('products')->withoutMiddleware([VerifyCsrfToken::class])->group(function () {
    // List all products
    Route::get('/', [ProductController::class, 'index']);
    // Add new product
    Route::post('/', [ProductController::class, 'store']);
    // View single product
    Route::get('{id}', [ProductController::class, 'show']);
    // Update product
    Route::put('{id}', [ProductController::class, 'update']);
    // Delete product
    Route::delete('{id}', [ProductController::class, 'destroy']);
});
