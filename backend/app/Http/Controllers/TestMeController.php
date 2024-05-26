<?php

namespace App\Http\Controllers;

use App\Models\Element;
use Illuminate\Http\Request;

class TestMeController extends Controller
{
    //
    public function index()
    {
        $data = Element::all();
    
        return response()->json($data);
    }
}
