<?php
namespace App\DTOs;
use App\Repositories\Interfaces\DTOInterface;
use Illuminate\Support\Collection;

class ResidencesDTO implements DTOInterface
{
    public function __construct(private Collection|array $residence) {
        $this->residence = $residence;
    }

    public function toArray():array{
        return array_map(fn($residence)=>[
        'id'          => $residence->id,
        'user_id'     => $residence->user_id,
        'number'      => $residence->number,
        'way'         => $residence->way,
        'street'      => $residence->street,
        'city'        => $residence->city,
        'postal_code' => $residence->postal_code,
        'country'     => $residence->country,
        ],$this->residence->all());
    }
}