<?php

namespace Database\Seeders;

use App\Models\Allergy;
use App\Models\Element;
use App\Models\Goal;
use App\Models\Productivity;
use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ElementSeederTabel extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       Element::factory(10)->create();
    }
}
