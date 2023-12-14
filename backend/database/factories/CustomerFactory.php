<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Goal;
use App\Models\Allergy;
use App\Models\Productivity;
use App\Models\Type;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        return [
            "first_name" => $this->faker->firstName(),
            "last_name" => $this->faker->lastName(),
            "email" => $this->faker->email(),
            "age" => $this->faker->numberBetween(10, 100),
            "wight" => $this->faker->numberBetween(20, 500),
            "gender" => fake()->title(),
            "password" => fake()->sentence(),
            "phone" => $this->faker->sentence(),
            "goal_id" => Goal::inRandomOrder()->first()->id,
            "type_id" => Type::inRandomOrder()->first()->id,
            "productivity_id" => Productivity::inRandomOrder()->first()->id,
            "MusclePercentage" => $this->faker->numberBetween(0, 100),
            "FatPercentage" => $this->faker->numberBetween(0, 100),
            "allergy_id" => Allergy::inRandomOrder()->first()->id,
        ];
    }
}
