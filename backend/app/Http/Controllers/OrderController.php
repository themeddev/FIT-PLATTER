<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Order;
use App\Models\OrderMeal;

class OrderController extends Controller
{
    public function index()
    {
        return Order::with(['meals' => function ($query) {
            $query->withPivot('quantity');
        }])->get();
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            "meals" => "array",
            "customer_id" => "required",
            "total_price" => "numeric",
            "confirmed" => "boolean"
        ]);

        $order = Order::create([
            "customer_id" => $fields['customer_id'],
            "total_price" => $fields['total_price'],
            "confirmed" => $fields['confirmed']
        ]);

        if ($order) {
            foreach ($fields['meals'] as $meal) {
                $orderMeal = OrderMeal::create([
                    'meal_id' => $meal['id'],
                    'order_id' => $order->id,
                    'quantity' => $meal['quantity']
                ]);
                if (!$orderMeal) {
                    return response([
                        "message" => "Order Not Made Due To An Error",
                    ]);
                }
            }
            return response([
                "message" => "Order Was Made Successfully",
                "order" => $order
            ]);
        } else {
            return response([
                "message" => "Order Was Not Made",
                "order" => $order->error()
            ]);
        }
    }

    public function show($id)
    {
        $order = Order::with(['meals' => function ($query) {
            $query->withPivot('quantity');
        }])->find($id);

        if ($order) {
            return $order;
        } else {
            return response([
                "message" => "Not Found!"
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $fields = $request->validate([
            "meals" => "array",
            "customer_id" => "sometimes|required|integer",
            "total_price" => "sometimes|numeric",
            "confirmed" => "sometimes|boolean"
        ]);

        $order = Order::find($id);
        if (!$order) {
            return response(["message" => "Order Was Not Found!"], 404);
        }

        if (isset($fields['confirmed'])) {
            $order->confirmed = $fields['confirmed'];
        }
        if (isset($fields['total_price'])) {
            $order->total_price = $fields['total_price'];
        }
        if (isset($fields['customer_id'])) {
            $order->customer_id = $fields['customer_id'];
        }

        if (isset($fields['meals'])) {
            OrderMeal::where('order_id', $order->id)->delete();
            foreach ($fields['meals'] as $meal) {
                $orderMeal = OrderMeal::create([
                    'meal_id' => $meal['id'],
                    'order_id' => $order->id,
                    'quantity' => $meal['quantity']
                ]);
                if (!$orderMeal) {
                    return response([
                        "message" => "Order Not Made Due To An Error",
                    ], 500);
                }
            }
        }

        $order->save();
        return response([
            "message" => "Order Was Updated Successfully",
            "order" => $order
        ], 200);
    }

    public function destroy($id)
    {
        $order = Order::find($id);
        if ($order) {
            $order->delete();
            return response([
                "message" => "Order Was Deleted Successfully"
            ]);
        } else {
            return response([
                "message" => "Order Was Not Found!"
            ]);
        }
    }
}
