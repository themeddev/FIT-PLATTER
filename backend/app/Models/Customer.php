<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Goal;
use App\Models\Type;
use App\Models\Allergy;
use App\Models\Productivity;


class Customer extends Model
{
    use HasFactory;

    public function Goals(){
        return $this->hasMany(Goal::class);
    }

    public function Type(){
        return $this->hasMany(Type::class);
    }
    public function Allergy(){
        return $this->hasMany(Allergy::class);
    }
    public function Productivity(){
        return $this->hasMany(Productivity::class);
    }



}
