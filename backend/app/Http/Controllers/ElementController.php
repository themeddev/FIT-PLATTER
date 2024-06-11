<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Element;

class ElementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $elements = Element::all();
        return $elements;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return "all good";
        $request->validate([
            "name" => "required",
            "image"=> "required",
            "calories" => "required",
            "protein" => "required",
            "carbs" => "required",
            "fat" => "required",
            "price" => "required",
            'measuredByGram' => "required"
        ]);
        return Element::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($element)
    {
        return Element::find($element);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $element)
    {
        return response($request);
        $UpElement = Element::find($element);
        $UpElement->update($request->all());
        return $UpElement;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($element)
    {
        Element::destroy($element);
        return response()->json([
            "message" =>"The Element Was Romeve Sucssfuly"
        ]);
    }

    public function search($name)
    {
        return Element::where('name', 'like', '%'.$name.'%')->get();
    }
}
