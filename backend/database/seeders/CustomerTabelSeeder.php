<?php

namespace Database\Seeders;

use App\Models\Allergy;
use App\Models\Customer;
use App\Models\Goal;
use App\Models\Productivity;
use App\Models\Type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CustomerTabelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Customer::factory(2)->create();
        
    }
}
