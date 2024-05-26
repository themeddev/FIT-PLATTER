<?php

namespace Database\Seeders;

use App\Models\Meal;
use App\Models\Element;
use App\Models\MealsElement;
use Illuminate\Database\Seeder;

class MealSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create elements
        $elements = Element::factory()->count(20)->create();
        
        // Create meals
        $meals = Meal::factory()->count(10)->create();
        
        // Attach multiple elements to each meal
        $meals->each(function ($meal) use ($elements) {
            $randomElements = $elements->random(rand(2, 5)); // Randomly select 2 to 5 elements
            $randomElements->each(function ($element) use ($meal) {
                MealsElement::create([
                    'meal_id' => $meal->id,
                    'element_id' => $element->id,
                    'size' => rand(1, 5), // Example size value, adjust as necessary
                ]);
            });
        });
    }
}
