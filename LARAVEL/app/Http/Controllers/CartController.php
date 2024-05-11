<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addItem(Request $request)
    {
        // Validate input data
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        // Create cart item
        $cartItem = Cart::create([
            'product_id' => $request->product_id,
            'quantity' => $request->quantity
        ]);

        return response()->json($cartItem);
    }

    public function removeItem($id)
    {
        $cartItem = Cart::findOrFail($id);
        $cartItem->delete();
        return response()->json(['message' => 'Item removed successfully']);
    }

    public function updateQuantity(Request $request, $id)
    {
        // Validate input data
        $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        $cartItem = Cart::findOrFail($id);
        $cartItem->quantity = $request->quantity;
        $cartItem->save();
        return response()->json($cartItem);
    }

    public function calculateTotal()
    {
        // Get all cart items
        $cartItems = Cart::with('product')->get();
        
        // Calculate total price
        $totalPrice = 0;
        foreach ($cartItems as $cartItem) {
            $totalPrice += $cartItem->quantity * $cartItem->product->price;
        }

        return response()->json(['total_price' => $totalPrice]);
    }
}

