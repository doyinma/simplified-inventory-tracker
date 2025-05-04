<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

Route::prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'index']);        // List all products
    Route::post('/', [ProductController::class, 'store']);       // Add new product
    Route::get('{id}', [ProductController::class, 'show']);      // View single product (optional for edit pre-fill)
    Route::put('{id}', [ProductController::class, 'update']);    // Update product
    Route::delete('{id}', [ProductController::class, 'destroy']); // Delete product
});
