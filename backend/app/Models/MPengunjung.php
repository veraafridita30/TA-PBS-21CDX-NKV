<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MPengunjung extends Model

{
    // Buat variabel untuk inisialisasi tabel
    protected $table = "tb_pengunjung";

    // buat fungsi untuk menampilkan data mahasiswa
    function viewData()
    {
        $query = $this->select("id AS id_pengunjung,", "nama AS nama_pengunjung", "telepon AS telepon_pengunjung", "alamat AS alamat_pengunjung")->from($this->table)->orderBy("id");

        return $query->get();
    }

    // buat fungsi untuk pencarian data pengunjung
    function searchData($keyword)
    {
        $query = $this->select("id AS id_pengunjung,", "nama AS nama_pengunjung", "telepon AS telepon_pengunjung", "alamat AS alamat_pengunjung")->from($this->table)
        // pencarian nama, telepon dan alamat harus sesuai dengan data
        ->where('nama', $keyword)
        ->orWhere('telepon', $keyword)
        ->orWhere('alamat', $keyword)
        // pencarian nama sesuai dengan karakter yang ada pada data
        ->orWhereRaw('nama LIKE?',["%$keyword%"])
        ->orderBy("id");

        return $query->get();
    }

    
}
