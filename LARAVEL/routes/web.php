<?php

use Illuminate\Support\Facades\Route;

// Routes for products
Route::get('/products', 'ProductController@index');

// Routes for cart actions
Route::post('/cart/add', 'CartController@addItem');
Route::post('/cart/remove', 'CartController@removeItem');
Route::put('/cart/update', 'CartController@updateQuantity');
Route::get('/cart/total', 'CartController@calculateTotal');
