<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Enum\CivilityEnum;
use App\Enum\GenderEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;
    protected $keyType = 'string';
    public $incrementing = false;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'civility',
        'genre',
        'birthday',
        'phone',
        'apartment',
        'first_name',
        'last_name',
        'using_name',
        'user_type',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'civility' => CivilityEnum::class,
            'genre'    => GenderEnum::class,
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function residences(): HasMany
    {
        return $this->hasMany(Residence::class);
    }
}
