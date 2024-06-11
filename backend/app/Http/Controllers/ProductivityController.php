<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Productivity;

class ProductivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $prod = Productivity::all();
        if($prod) return response($prod);

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
        $inputs = $request->validate([
            "productivity" => "required|string"
        ]);

        $prod = Productivity::create($inputs);
        if($prod) return response([
            "message" => "Productivity Was Created Successfully"
        ]);

        return response([ "message" => "There's an Error"]);
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
        $prod = Productivity::find($id);
        if(!$prod) return response(['message' => 'No Productivity Was Found!']); 

        return response($prod);
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
        $inputs = $request->validate([
            "productivity" => "required|string"
        ]);

        $prod = Productivity::find($id);
        if($prod){

            $prod->productivity = $inputs['productivity'];
            $prod->save();

            return response([
                "message" => "Productivity Was Updated Successfully"
            ]);

        }else{
            return response([ "message" => "No Productivity Was Found!"]);
        }
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
        $prod = Productivity::where('id',$id)->delete();
        if($prod){
            
            return response(['message' => "Productivity Was Updated Successfully"]);
        } else{
            return response(['message' => "No Productivity  Was Found!"]);

        }
    }
}
