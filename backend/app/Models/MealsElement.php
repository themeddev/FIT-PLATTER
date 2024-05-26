<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealsElement extends Model
{
    use HasFactory;

    protected $table = 'meals_elements';

    protected $fillable = ['meal_id', 'element_id', 'size'];

    public function meal()
    {
        return $this->belongsTo(Meal::class);
    }

    public function element()
    {
        return $this->belongsTo(Element::class);
    }
}
