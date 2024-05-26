<?php

namespace Database\Factories;

use App\Models\Goal;
use App\Models\Allergy;
use App\Models\Productivity;
use App\Models\Type;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    protected $model = Customer::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'email' => $this->faker->unique()->safeEmail(),
            'age' => $this->faker->numberBetween(10, 100),
            'weight' => $this->faker->numberBetween(20, 500),
            'height' => $this->faker->numberBetween(20, 500),
            'gender' => $this->faker->randomElement(['male', 'female']),
            'password' => Hash::make('password'), // Using Hash for better security practice
            'phone' => $this->faker->phoneNumber(),
            'goal_id' => Goal::inRandomOrder()->value('id'),
            'type_id' => Type::inRandomOrder()->value('id'),
            'productivity_id' => Productivity::inRandomOrder()->value('id'),
            'MusclePercentage' => $this->faker->numberBetween(0, 100),
            'FatPercentage' => $this->faker->numberBetween(0, 100),
            'allergy_id' => Allergy::inRandomOrder()->value('id'),
        ];
    }
}
