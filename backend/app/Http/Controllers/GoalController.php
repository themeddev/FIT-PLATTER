<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Goal;

class GoalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allGoals = Goal::all();
        return response($allGoals);
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
        $inputs = $request->validate([
            "goal" => "required|string"
        ]);

        $goal = Goal::create($inputs);
        if($goal){
            return response([
                "message" => "Goal Was Created Successfully"
            ]);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $goal = Goal::find($id);
        if($goal){
            return response($goal);
        }else{
            return response([
                "Message" => "Goal was Not Found!" 
            ]);
        }
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
        $goal = Goal::find($id);
        if($goal){
            $input = $request->validate([
                "goal" => "required|string"
            ]);

            $goal->goal = $input['goal'];
            $goal->save();

            return response([
                "Message" => "Goal Was Updated Successfully"
            ]);
        }else{
            return response([
                "Message" => "Goal was Not Found!" 
            ]);
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
        $goal = Goal::where('id', $id)->delete();
        if($goal)
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
}
