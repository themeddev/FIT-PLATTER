<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Element extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        "image",
        "calories",
        "protein",
        "carbs",
        "fat",
        'price',
        "measuredByGram"
    ];

    public function meals()
    {
        return $this->belongsToMany(Meal::class, 'meals_elements')
                    ->withPivot('size');
    }

}
