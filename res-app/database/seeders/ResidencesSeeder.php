<?php

namespace Database\Seeders;

use App\Models\Residence;
use App\Models\User;
use Illuminate\Database\Seeder;

class ResidencesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first();
        Residence::factory()->count(5)->create([
            'user_id' => $user->id 
        ]);
    }
}
