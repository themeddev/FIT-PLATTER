<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderMeal extends Model
{
    protected $table = 'orders_meals';

    protected $fillable = [
        'order_id',
        'meal_id',
        'quantity',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function meal()
    {
        return $this->belongsTo(Meal::class);
    }
}
