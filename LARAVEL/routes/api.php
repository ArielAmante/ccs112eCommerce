<?php

use Illuminate\Support\Facades\Route;

// Routes for products
Route::get('/products', 'App\Http\Controllers\ProductController@index');

// Routes for cart actions
Route::post('/cart/add', 'App\Http\Controllers\CartController@addItem');
Route::post('/cart/remove', 'App\Http\Controllers\CartController@removeItem');
Route::put('/cart/update', 'App\Http\Controllers\artController@updateQuantity');
Route::get('/cart/total', 'App\Http\Controllers\CartController@calculateTotal');
