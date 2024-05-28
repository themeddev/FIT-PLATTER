<?php

namespace App\Http\Controllers;

use App\Models\MealsElement;
use Illuminate\Http\Request;

class MealsElementController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            "meal_id" => "required|exists:meals,id",
            "element_id" => "required|exists:elements,id",
            "size" => "numeric"
        ]);

        $mealsElement = MealsElement::create([
            "meal_id" => $fields['meal_id'],
            "element_id" => $fields['element_id'],
            "size" => $fields['size'],
        ]);

        return response()->json([
            "message" => "Created successfully",
            "data" => $mealsElement
        ], 201);
    }
}
