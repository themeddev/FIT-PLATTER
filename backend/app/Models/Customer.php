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
        return $this->belongsTo(Goal::class, "goal_id");
    }
    public function Type(){
        return $this->belongsTo(Type::class, "type_id");
    }
    public function Allergy(){
        return $this->belongsTo(Allergy::class, 'allergy_id');
    }
    public function Productivity(){
        return $this->belongsTo(Productivity::class, 'productivity_id');
    }
    
    public function order()
    {
        return $this->hasMany(Order::class);
    }



}
