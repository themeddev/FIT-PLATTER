<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Goal;
use App\Models\Type;
use App\Models\Allergy;
use App\Models\Productivity;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Customer extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ["first_name","last_name","email","password","age","gender","weight", "height","phone","allergy_id","productivity_id","type_id","goal_id","MusclePercentage","FatPercentage"];


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
    
    public function order()
    {
        return $this->hasMany(Order::class);
    }



}
