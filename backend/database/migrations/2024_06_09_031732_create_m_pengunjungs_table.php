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
        Schema::create('tb_pengunjung', function (Blueprint $table) {
            //$table->id();

            // buat field id
            $table->integer('id')->autoIncrement();
            // buat field email
            $table->char('email', 50);
            // buat field nama
            $table->string("nama", 100);
            // buat field telepon
            $table->string("telepon", 15);
            // buat field alamat
            $table->string('alamat');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_pengunjung');
    }
};
