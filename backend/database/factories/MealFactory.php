<?php

namespace Database\Factories;

use App\Models\Element;
use App\Models\Meal;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MealFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Meal::class;
    
    public function definition()
    {
        return [
            'category' => $this->faker->randomElement(['Pre-Workout', 'After-Workout']),
            "image" => $this->faker->imageUrl(),
            'calories' => $this->faker->numberBetween(100, 1000),
            'carbs' => $this->faker->numberBetween(100, 1000), // Corrected typo
            'fat' => $this->faker->numberBetween(10, 100),
            'protein' => $this->faker->numberBetween(10, 100),
            'price' => $this->faker->randomFloat(2, 5, 100),
        ];
    }

    public function withElements($count = 5)
    {
        return $this->afterCreating(function (Meal $meal) use ($count) {
            $elements = Element::inRandomOrder()->take($count)->get();
            $meal->mealElement()->attach($elements);
        });
    }
}
