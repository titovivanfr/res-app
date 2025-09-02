<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Citizens extends Model
{
    /** @use HasFactory<\Database\Factories\CitizensFactory> */
    use HasFactory;

    public function residance(): BelongsTo
    {
        return $this->belongsTo(Residance::class);
    }
}
