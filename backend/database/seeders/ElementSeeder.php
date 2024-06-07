<?php

namespace Database\Seeders;

use App\Models\Element;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class ElementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get(database_path('./data/elements.json'));
        $elements = json_decode($json, true);

        foreach ($elements as $element) {
            Element::create([
                'name' => $element['name'],
                'image' => $element['image'],
                'calories' => $element['calories'],
                'protein' => $element['protein'],
                'carbs' => $element['carbs'],
                'fat' => $element['fat'],
                'measurementUnit' => $element['measurementUnit'],
                'price' => $element['price'],
            ]);
        }
    }
}
