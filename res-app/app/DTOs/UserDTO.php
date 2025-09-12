<?php
namespace App\DTOs;

use App\Models\User;

class UserDTO {
    private $user;

    public function __construct(User $user) {
        $this->user = $user;
    }

    public function toArray():array
    {
        return [
            'apartment' => $this->user->apartment,
            'birthday' => $this->user->birthday,
            'civility' => $this->user->civility,
            'email' => $this->user->email,
            'first_name' => $this->user->first_name,
            'genre' => $this->user->genre,
            'last_name' => $this->user->last_name,
            'phone' => $this->user->phone,
            'user_type' => $this->user->user_type,
            'using_name' => $this->user->using_name,
        ];
    }
}