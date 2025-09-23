<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Residence extends Model
{
    /** @use HasFactory<\Database\Factories\ResidenceFactory> */
    use HasFactory;

    protected $keyType = 'string';
    
    public $incrementing = false;

    protected $fillable = [
        'id', 'user_id', 'number', 'way', 'street', 'city', 'postal_code', 'country',
    ];
    
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function citizens(): HasMany
    {
        return $this->hasMany(Citizens::class);
    }
    
    public function callbord(): HasOne
    {
        return $this->hasOne(Callbord::class);
    }
}
