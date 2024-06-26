<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;

class Type extends Model
{
    use HasFactory;

    protected $fillable = ['type'];
    
    public function Customer(){
        return $this->hasMany(Customer::class);
    }
}
