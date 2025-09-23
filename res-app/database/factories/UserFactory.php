<?php

namespace Database\Factories;

use App\Enum\CivilityEnum;
use App\Enum\GenderEnum;
use App\Enum\UserTypeEnum;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id'                => Str::uuid(),
            'civility'          => fake()->randomElement([CivilityEnum::MISS, CivilityEnum::MR, CivilityEnum::MRS]),
            'genre'             => fake()->randomElement([GenderEnum::MAN, GenderEnum::WOMAN]),
            'birthday'          => fake()->date(),
            'phone'             => fake()->unique()->phoneNumber(),
            'apartment'         => fake()->secondaryAddress(),
            'first_name'        => fake()->firstName(),
            'last_name'         => fake()->lastName(),
            'using_name'        => fake()->lastName(),
            'user_type'         => fake()->randomElement([UserTypeEnum::CITIZEN, UserTypeEnum::SYNDICAT]),
            'email'             => fake()->unique(true)->safeEmail() . Str::random(5),
            'email_verified_at' => now(),
            'password'          => static::$password ??= Hash::make('password'),
            'remember_token'    => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
