<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meal;
use App\Models\meals_element;

class MealController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    
    public function index(Request $request)
    {
        // Eager load the elements relationship
        $meals = Meal::with('elements')->get();
        return response()->json($meals);

    } 

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $fileds = $request->validate([
            "total_calories" => 'numeric',
            "total_carbohydate" =>"numeric",
            "total_fat" => "numeric",
            "total_protien" => "numeric",
            "meal_price" => "numeric",
            "elements" => "array"
        ]);
        // dd($fileds['elements']);

        $meal = Meal::create([
            "total_calories" => $fileds['total_calories'],
            "total_carbohydate" => $fileds['total_carbohydate'],
            "total_fat" => $fileds['total_fat'],
            "total_protien" => $fileds['total_protien'],
            "meal_price" => $fileds['meal_price']
        ]);

        foreach($fileds['elements'] as $elm)
        {
            $meal_element = meals_element::create([
                "meal_id" => $meal->id,
                "element_id" => $elm['element_id'],
                "size" => $elm['size'],
            ]);
            // return ($elm['size']);
        }
        return [
            "message" => "all good",
            "data" => $meal_element
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
