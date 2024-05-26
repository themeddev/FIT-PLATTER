<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'category',
        "image",
        'calories',
        'carbs',
        'fat',
        'protein',
        'price'
    ];

    public function elements()
    {
        return $this->belongsToMany(Element::class, 'meals_elements')
                    ->withPivot('size');
    }
}
