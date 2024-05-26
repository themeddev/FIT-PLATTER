<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'meal_id',
        'total_price',
        'confirmed'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function meal()
    {
        return $this->belongsTo(Meal::class);
    }
}
