<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addItem(Request $request)
    {
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
        $cartItem = Cart::findOrFail($id);
        $cartItem->quantity = $request->quantity;
        $cartItem->save();
        return response()->json($cartItem);
    }
    public function calculateTotal()
    {
        $totalPrice = Cart::sum('quantity');
        return response()->json(['total_price' => $totalPrice]);
    }
}
