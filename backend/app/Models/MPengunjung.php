<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MPengunjung extends Model
{
    // buat variabel untuk inisialisasi tabel
    protected $table = "tb_pengunjung";
    
    // buat fungsi untuk menampilkan data pengunjung
    function viewData()
    {
        $query = $this->select("id AS id_pengunjung", "email AS email_pengunjung", "nama AS nama_pengunjung", "telepon AS telepon_pengunjung", "alamat AS alamat_pengunjung")->from($this->table)->orderBy("id");

        return $query->get();
    }

    // buat fungsi untuk pencarian data pengunjung
    function searchData($keyword)
    {
        $query = $this->select("id AS id_pengunjung", "email AS email_pengunjung", "nama AS nama_pengunjung", "telepon AS telepon_pengunjung", "alamat AS alamat_pengunjung")->from($this->table)
        // pencarian email, telepon dan alamat harus sesuai dengan data
        ->where('email', $keyboard)
        ->orWhere('telepon', $keyword)
        ->orWhere('alamat', $keyword)
        // pencarian nama sesuai dengan karakter yang ada pada data
        ->orWhereRaw('nama LIKE ?', ["%$keyword%"])
        ->orderBy("id");

        return $query->get();
    }

    // buat fungsi cek simpan data
    function checkSaveData($email)
    {
        $query = $this->select("email")->from($this->table)->where("email", "=", $email);

        return $query->get();
    }

    // buat fungsi untuk simpan data
    function saveData($email, $nama, $telepon, $alamat)
    {
        $this->insert([
            "email" => $email,
            "nama" => $nama,
            "telepon" => $telepon,
            "alamat" => $alamat,
        ]);
    }

    // buat fungsi untuk check data (berdasarkan email)
    function checkData($email)
    {
        // $query = $this->select("id")->where("email", "=", $email);
        $query = $this->select("id")
        ->whereRaw("TO_BASE64(email) = '$npm'");

        return $query->get();
    }

    // buat fungsi untuk hapus data
    function deleteData($email)
    {
        // $this->where("email", "=",$email)->delete();
        $this->whereRaw("TO_BASE64(email) = '$email'")->delete();
    }

    // buat fungsi untuk detail data
    function detailData($email)
    {
        $query = $this->select("id AS id_pengunjung", "email AS email_pengunjung", "nama AS nama_pengunjung", "telepon AS telepon_pengunjung", "alamat AS alamat_pengunjung")->from($this->table)->whereRaw("TO_BASE64(email) = '$email'");

        return $query->get();
    }

    // buat fungsi untuk cek edit data
    function checkEditData($email_lama, $email)
    {
        $query = $this->select("id")->where("npm", "=",$email)->whereRaw("TO_BASE64(email) != '$email_lama'")->get();

        return $query;
    }

    // buat fungsi untuk edit data
    function editData($email, $nama, $telepon, $alamat, $email_lama)
    {
        $this->whereRaw("TO_BASE64(email) = '$email_lama'")->update([
            "email" => $email,
            "nama" => $nama,
            "telepon" => $telepon,
            "alamat" => $alamat,
        ]);
    }
}
