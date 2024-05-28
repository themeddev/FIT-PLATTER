<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CustomerController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            "first_name" => 'required|string',
            "last_name" => 'string|nullable',
            "email" => "required|string|unique:customers,email",
            "password" => "required|string",
            "age" => "numeric|nullable",
            "gender" => "string|nullable",
            "height" => "numeric|nullable",
            "weight" => "numeric|nullable",
            "phone" => "string|nullable",
            "allergy_id" => "numeric|nullable",
            "productivity_id" => "numeric|nullable",
            "type_id" => "numeric|nullable",
            "goal_id" => "numeric|nullable",
            "MusclePercentage" => 'numeric|nullable',
            "FatPercentage" => 'numeric|nullable'
        ]);

        $validatedData['password'] = bcrypt($validatedData['password']);

        $customer = Customer::create($validatedData);

        $token = $customer->createToken('MyTokenApp')->plainTextToken;

        return response([
            "message" => "Customer registered successfully.",
            "token" => $token
        ], 201);
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'string|required',
            'password' => 'string|required',
        ]);

        $customer = Customer::where("email", $validatedData['email'])->first();

        if (!$customer || !Hash::check($validatedData['password'], $customer->password)) {
            return response([
                'message' => "Invalid credentials.",
            ], 401);
        }

        $token = $customer->createToken('MyTokenApp')->plainTextToken;

        return response([
            'message' => 'Login successful.',
            'token' => $token,
            'customer_id' => $customer->id
        ]);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            "message" => "Logged out successfully."
        ];
    }
}
