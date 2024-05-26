<?php

namespace Database\Factories;

use App\Models\Element;
use App\Models\Meal;
use App\Models\MealsElement;
use Illuminate\Database\Eloquent\Factories\Factory;

class MealsElementFactory extends Factory
{
    protected $model = MealsElement::class;

    public function definition()
    {
        return [
            'element_id' => Element::factory(),
            'meal_id' => Meal::factory(),
            'size' => $this->faker->numberBetween(0, 100),
        ];
    }
}
