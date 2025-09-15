<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('callbords', function (Blueprint $table) {
            $table->id();
            $table->foreignId('residence_id')->constrained();
            $table->integer('type_content');
            $table->integer('status_content');
            $table->string('title');
            $table->string('desc');
            $table->string('url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('callbords');
    }
};
