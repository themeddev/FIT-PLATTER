<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Goal;
use App\Models\Productivity;
use App\Models\Type;
use App\Models\Allergy;


class SmallTableController extends Controller
{
    //

    public function index()
    {

        $goals = Goal::all();
        $allergy = Allergy::all();
        $prod = Productivity::all();
        $type = Type::all();

        return response([
            "goals" => $goals,
            "allergy" => $allergy,
            "productivity" => $prod,
            "types" => $type,
        ]);
    }
}
