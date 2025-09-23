<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Citizens extends Model
{
    /** @use HasFactory<\Database\Factories\CitizensFactory> */
    use HasFactory;
        protected $fillable = [
        'user_id',
        'residence_id',
    ];
    
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    
    public function residence(): BelongsTo
    {
        return $this->belongsTo(Residence::class);
    }
}
