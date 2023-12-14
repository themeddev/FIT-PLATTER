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
            "name" => $this->faker->name(),
            "image" => $this->faker->imageUrl(),
            "calories" => $this->faker->numberBetween(0, 100),
            "protien" => $this->faker->numberBetween(0, 100),
            "carbohydrates" => $this->faker->numberBetween(0, 100),
            "fat" => $this->faker->numberBetween(0, 100),
        ];
    }
}
