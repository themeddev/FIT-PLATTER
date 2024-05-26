<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\orders_meal;
use App\Models\Order;
use App\Models\Element;



class OrderController extends Controller
{
    //
    public function index()
    {
        return  Order::with(['meals' => function ($query) {
            $query->withPivot('quantity');
        }])->get();
    }

    public function order(Request $request)
    {
        
        $fildes = $request->validate([
            "meals" => "required",
            "customer_id" => "required",
            "total_price" => "numeric",
            "confirmed" => "boolean"
        ]);


        $order = Order::create([
            "customer_id" => $fildes['customer_id'],
            "total_price" => $fildes['total_price'],
            "confirmed" => $fildes['confirmed']
        ]);
        if($order)
        {
            foreach($fildes['meals'] as $elm)
            {
                $order_meal = orders_meal::create([
                    'meal_id' => $elm['id'],
                    'order_id' => $order->id,
                    'quantity' => $elm['quantity']
                ]);
                if(!$order_meal){
                    return response([
                        "message" => "Order Not Made Due To An Error",
                    ]);
                }
            }
            return response([
                "message" => "Order Was Made Succsessfuly",
                "order" => $order
            ]);
        }else{
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

        if($order){
            return $order;
        }else{
            return response([
                "message"=> "Not Found!"
            ]);
        }
    }

    public function update(Request $req, $id)
    {
        $fildes = $req->validate([
            "meals" => "required",
            "customer_id" => "required",
            "total_price" => "numeric",
            "confirmed" => "boolean"
        ]);

        $order = Order::find($id);
        if(!$order) return response([ "message" => "Order Was Not Found! ".$order]);

        $order->confirmed = $fildes['confirmed'];
        $order->total_price = $fildes['total_price'];
        
        $deleteAllMeal = orders_meal::where('order_id', $order->id)->delete();
        foreach($fildes['meals'] as $elm)
        {
            $order_meal = orders_meal::create([
                'meal_id' => $elm['id'],
                'order_id' => $order->id,
                'quantity' => $elm['quantity']
            ]);
            if(!$order_meal){
                return response([
                    "message" => "Order Not Made Due To An Error",
                ]);
            }
        }

        $order->save();
        return response([
            "message" => "Order Was Updated Succsessfuly",
            "order" => $order
        ]);

    }
    public function destroy($id)
    {
        $order = Order::where('id',$id)->delete();
        if($order){
            return response([
                "message" => "Order Was Deleted Succsessfuly"
            ]);
        }
    }

    public function reco()
    {
        $url = 'http://localhost:8008/';
        $ingredient = Element::all()->toArray();

        // $response = Http::post($url, $ingredient);
        $client = new Client();
        $res = $client->get($url, $ingredient);

        if ($res->successful()) {
            $data = $res->body();

            $data = str_replace("```json", "", $data);
            $data = str_replace("```", "", $data);
            // return response($data);
            $jsondata = json_decode($data);
            if (json_last_error() !== JSON_ERROR_NONE) {
                return response()->json(['error' => json_last_error_msg()], 400);
            }
            return response()->json($jsondata);
        } else {
            return response()->json(['error' => 'Failed to fetch data '], $res->status());
        }
    }
}