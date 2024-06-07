<?php

namespace Database\Seeders;

use App\Models\Meal;
use App\Models\Element;
use App\Models\MealsElement;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class MealSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Load meals from JSON file
        $json = File::get(database_path('./data/meals.json'));
        $mealsData = json_decode($json, true);

        // Create meals
        foreach ($mealsData as $mealData) {
            $meal = Meal::create([
                'category' => $mealData['category'],
                'image' => $mealData['image'],
                'calories' => $mealData['calories'],
                'protein' => $mealData['protein'],
                'carbs' => $mealData['carbs'],
                'fat' => $mealData['fat'],
                'price' => $mealData['price'],
            ]);

            // Attach multiple elements to each meal
            $elements = Element::inRandomOrder()->take(rand(2, 5))->get(); // Randomly select 2 to 5 elements
            foreach ($elements as $element) {
                MealsElement::create([
                    'meal_id' => $meal->id,
                    'element_id' => $element->id,
                    'size' => rand(1, 5), // Example size value, adjust as necessary
                ]);
            }
        }
    }
}
