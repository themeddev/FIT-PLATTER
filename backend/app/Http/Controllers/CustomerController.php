<?php

namespace App\Http\Controllers;

use App\Models\Customer;
// use App\Models\customers;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class CustomerController extends Controller
{
    //
    use HasApiTokens, HasFactory, Notifiable;

    
    public function register(Request $req)
    {
        $fildes = $req->validate([
            "first_name" => 'required|string',
            "last_name" => 'string',
            "email" => "required|string|unique:customers,email",
            "password" => "required|string",
            "age" => "numeric",
            "gender" => "string",
            "height" => "numeric", 
            "wight" => "numeric", 
            "phone" => "string",
            "allergy_id" => "numeric",
            "productivity_id" => "numeric",
            "type_id" => "numeric",
            "goal_id" => "numeric",
            "MusclePercentage" => 'numeric',
            "FatPercentage" => 'numeric'
        ]);

        $customer = Customer::create([
            "first_name" => $fildes['first_name'],
            "last_name" => $fildes['last_name'] ?? null,
            "email" => $fildes['email'],
            "password" => bcrypt($fildes['password']),
            "age" => $fildes['age'] ?? null,
            "gender" => $fildes['gender'] ?? null,
            "height" => $fildes["number"] ?? null, 
            "weight" => $fildes['weight'] ?? null, 
            "phone" => $fildes['phone'] ?? null,
            "allergy_id" => $fildes['allergy_id'] ?? null,
            "productivity_id" => $fildes['productivity_id'] ?? null,
            "type_id" => $fildes['type_id'] ?? null,
            "goal_id" => $fildes['goal_id'] ?? null,
            "MusclePercentage" => $fildes['MusclePercentage'] ?? null,
            "FatPercentage" => $fildes['FatPercentage'] ?? null
        ]);

        // $customer = Customer::create($req->all());
        $token = $customer->createToken('MyTokenApp')->plainTextToken;

        $response = [
            // "customer" => $customer,
            // 'token' => $token
            "message" => "all good"
        ];

        return response($response, 201);
    }


    public function login(Request $req)
    {
        $fildes = $req->validate([
            'email' => 'string|required',
            'password' => 'string|required',
        ]);

        $customer = Customer::where("email", $fildes['email'])->first();

        if(!$customer || !Hash::check($fildes['password'], $customer->password)){
            return response([
                'message' => "Bad Creds",
            ], 401);
        }

        $token = $customer->createToken('MyTokenApp')->plainTextToken;
        $res = [
            // 'customer'=> $customer,
            'token'=> $token
        ];
        return response($res);
    }

    public function logout(Request $req)
    {
        auth()->user()->token()->delete();
        return [
            "message" => "Logged out"
        ];
    }

}
