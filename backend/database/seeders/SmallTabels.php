<?php

namespace Database\Seeders;

use App\Models\Allergy;
use App\Models\Goal;
use App\Models\Productivity;
use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SmallTabels extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $goals = [
            ["goal"=> "Strength Gain"],
            ["goal"=> "Muscle Growth"],
            ["goal"=> "Body Composition"],
            ["goal"=> "Lifestyle Habits"],
            ["goal"=> "Recovery and Rest"],
            ["goal"=> "Flexibility"],
            ["goal"=> "Weight Loss"],
            ["goal"=> "Mental Health"]
        ];
        Goal::insert($goals);

        $type = [
            ["type" => "Soccer"],
            ["type" => "Basketball"],
            ["type" => "Boxing"],
            ["type" => "Martial Arts"],
            ["type" => "Wrestling"],
            ["type" => "Gymnastics"],
            ["type" => "Cycling"],
            ["type" => "Hiking"],
            ["type" => "Swimming"],
        ];
        Type::insert($type);

        $productivity = [
            ["productivity" => "Active"],
            ["productivity" => "Highly Active"],
            ["productivity" => "Middling Active"],
            ["productivity" => "Low Activity"],
            ["productivity" => "Non-Active"],
            ["productivity" => "Hyperactive"],
        ];

        Productivity::insert($productivity);

        $allergies = [
            ["allergy" => "Peanut"],
            ["allergy" => "Tree Nut"],
            ["allergy" => "Milk"],
            ["allergy" => "Egg"],
            ["allergy" => "Wheat"],
            ["allergy" => "Soy"],
            ["allergy" => "Fish"],
            ["allergy" => "Shellfish"],
            ["allergy" => "Sesame"],
            ["allergy" => "Corn"],
        ];

        Allergy::insert($allergies);
    }
}
