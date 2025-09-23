<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Residence>
 */
class ResidenceFactory extends Factory
{
    protected $model = \App\Models\Residence::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id'          => Str::uuid(),
            'user_id'     => null,
            'number'      => $this->faker->buildingNumber(),
            'way'         => $this->faker->randomElement(['Rue', 'Avenue', 'Boulevard', 'Impasse']),
            'street'      => $this->faker->streetName(),
            'city'        => $this->faker->city(),
            'postal_code' => $this->faker->postcode(),
            'country'     => $this->faker->country(),
        ];
    }
}
