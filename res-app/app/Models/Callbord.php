<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Callbord extends Model
{
    /** @use HasFactory<\Database\Factories\CallbordFactory> */
    use HasFactory;
    public function residence(): BelongsTo
    {
        return $this->belongsTo(Residence::class);
    }
}
