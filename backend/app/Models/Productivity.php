<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;

class Productivity extends Model
{
    use HasFactory;

    public $fillable = ['productivity'];
    public function Customer(){
        return $this->hasMany(Customer::class);
    }
}
