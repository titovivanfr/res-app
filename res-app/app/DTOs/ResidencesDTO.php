<?php
namespace App\DTOs;

use App\Models\Residence;
use App\Repositories\Interfaces\DTOInterface;
use Illuminate\Database\Eloquent\Collection;

class ResidencesDTO implements DTOInterface
{
    public function __construct(private Collection $residences) {
    }

    public function toArray():array{

        return $this->residences->map(fn($residence) => [
            'id'          => $residence->id,
            'user_id'     => $residence->user_id,
            'number'      => $residence->number,
            'way'         => $residence->way,
            'street'      => $residence->street,
            'city'        => $residence->city,
            'postal_code' => $residence->postal_code,
            'country'     => $residence->country,
        ])->toArray();
    }
}