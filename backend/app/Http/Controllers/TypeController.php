<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Type;

class TypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $typeOfSports = Type::all();
        if($typeOfSports) return response()->json($typeOfSports);
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
            "type" => "required|string"
        ]);

        $typeOfSports = Type::create($inputs);
        if($typeOfSports) return response()->json([
            "message" => "Type Of Sport Was Created Successfully"
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
        $typeOfSport = Type::find($id);
        if(!$typeOfSport) return response(['message' => 'No Type Of Sport Was Found!']); 

        return response()->json($typeOfSport);
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
            "type" => "required|string"
        ]);

        $typeOfSport = Type::find($id);
        if($typeOfSport){

            $typeOfSport->type = $inputs['type'];
            $typeOfSport->save();

            return response()->json([
                "message" => "Type Of Sport Was Updated Successfully"
            ]);

        }else{
            return response([ "message" => "No Type Of Sport Was Found!"]);
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
        $typeOfSport = Type::where('id',$id)->delete();
        if($typeOfSport){
            
            return response(['message' => "Type Of Sport Was Updated Successfully"]);
        } else{
            return response(['message' => "No Type Of Sport Was Found!"]);

        }

    }
}
