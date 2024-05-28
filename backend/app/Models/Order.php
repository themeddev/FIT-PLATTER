<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'customer_id',
        'total_price',
        'confirmed',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function meals()
    {
        return $this->belongsToMany(Meal::class, 'orders_meals')->withPivot('quantity');
    }
}
