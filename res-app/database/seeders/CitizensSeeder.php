<?php

namespace Database\Seeders;

use App\Enum\UserTypeEnum;
use App\Models\Citizens;
use App\Models\Residence;
use App\Models\User;
use Illuminate\Database\Seeder;

class CitizensSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $res = Residence::first();
        User::where('user_type', UserTypeEnum::CITIZEN)->each(function ($user) use($res) {
            Citizens::factory()->create([
                'residence_id' => $res->id,
                'user_id' => $user->id,
            ]);
        });
    }
}
