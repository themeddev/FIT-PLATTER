<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Element>
 */
class ElementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "name" => $this->faker->word,
            "image" => $this->faker->imageUrl(),
            "calories" => $this->faker->numberBetween(0, 100),
            "protein" => $this->faker->numberBetween(0, 100),
            "carbs" => $this->faker->numberBetween(0, 100),
            "fat" => $this->faker->numberBetween(0, 100),
            "price" => $this->faker->numberBetween(0, 50),
            "measurementUnit" => $this->faker->randomElement(['Gram', "Liter", "Unit", "Cup", "TableSpoon"]),
        ];
    }
}
