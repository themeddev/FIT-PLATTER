<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meal;
use App\Models\Element;
use App\Models\Customer;
use App\Models\MealsElement;

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
        $fields = $request->validate([
            "calories" => 'numeric',
            "carbs" => "numeric",
            "fat" => "numeric",
            "protein" => "numeric",
            "price" => "numeric",
            "image" => "string",
            "category" => "required",
            "elements" => "array"
        ]);

        $meal = Meal::create([
            "calories" => $fields['calories'],
            "carbs" => $fields['carbs'],
            "fat" => $fields['fat'],
            "protein" => $fields['protein'],
            "price" => $fields['price'],
            "category" => $fields['category'],
            "image" => $fields['image']
        ]);

        foreach ($fields['elements'] as $elm) {
            MealsElement::create([
                "meal_id" => $meal->id,
                "element_id" => $elm['id'], // Assuming 'id' is the element ID
                "size" => $elm['quantity'], // Assuming 'quantity' is the size for the element
            ]);
        }

        return response()->json([
            "message" => "Created successfully",
            "data" => $meal
        ], 201);
    }
    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        return  Meal::with(['elements' => function ($query) {
            $query->withPivot('size');
        }])->find($id);
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
        $meal = Meal::findOrFail($id);
        $fileds = $request->validate([
            "calories" => 'numeric',
            "carbs" =>"numeric",
            "fat" => "numeric",
            "protein" => "numeric",
            "price" => "numeric",
            "category" => "required",
            "image" => "string",
            "elements" => "array"
        ]);
        $meal->update($fileds);

        $meal->save();
        MealsElement::where("meal_id", $meal->id)->delete();

        foreach( $fileds['elements'] as $elm )
        {
            $meal_element = MealsElement::create([
                "meal_id" => $meal->id,
                "element_id" => $elm['element_id'],
                "size" => $elm['size'],
            ]);
        }

        return response([
            "message" => "Updated Successfully"
            // "data" => $meal_element
        ]);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delMeal = Meal::where('id', $id)->delete();

        if($delMeal)
        {
            return response([
                "message" => "Deleted Successfully"
            ]);
        }else{
            return response([
                "message" => "Meal Was Not Found!"
            ]);
        }
    }

    public function reco($id)
    {


        $url = 'http://localhost:8008/';
        $ingredient = Element::pluck('name')->toArray();

        $User = Customer::with('Goals', 'Type', 'Allergy', 'Productivity')->get();
        
        $res = Http::post($url, ['ingredient' => $ingredient, "User" => $User]);


        // $client = new Client();
        // $res = $client->request("POST", $url, [["name"=> "achraf", "email" => "achraf@gmail.com"], ["name" => "youness", "email"=> "younss@gmail.com"]]);

        if ($res->successful()) {
            $data = $res->getbody();


            $data = str_replace("```json", "", $data);
            $data = str_replace("```", "", $data);
            // return response($data);
            $jsondata = json_decode($data);
            if (json_last_error() !== JSON_ERROR_NONE) {
                return response()->json(['error' => json_last_error_msg()], 400);
            }

            $PreWorout = new Meal();
            $total_protein = 0;
            $total_carbs = 0;
            $total_calories = 0;
            $total_fat = 0;
            $total_price = 0;
            foreach($jsondata->afterWorkout as $ingred){
                $info = Element::where('name', $ingred['ingredient'])->first();
                if($info){
                    $total_calories += $info->calories * $ingred['quantity'];
                    $total_carbs+= $info->carbs * $ingred['quantity'];
                    $total_fat += $info->fat * $ingred['quantity'];
                    $total_price += $info->price * $ingred['quantity'];
                    $total_protein += $info->protein * $ingred['quantity'];
                    $meal_element = MealsElement::create([
                        "meal_id" => $PreWorout->id,
                        "element_id" => $info->id,
                        "size" => $ingred['quantity'],
                    ]);
                }else{
                    return response(['message'=> "somthing wrong"]);
                }
            }

            $PreWorout->price = $total_price;
            $PreWorout->protein = $total_protein;
            $PreWorout->fat = $total_fat;
            $PreWorout->carbs = $total_carbs;
            $PreWorout->calories = $total_calories;
            $saved = $PreWorout->save();

            // $Meal_1 = Meal::create([
                
            // ])
            if($saved){
                return response($PreWorout);
            }else{
                return response(['message'=> "Didnt Save!"]);
            }
        } else {
            return response()->json(['error' => 'Failed to fetch data '], $res->status());
        }
    }

}
