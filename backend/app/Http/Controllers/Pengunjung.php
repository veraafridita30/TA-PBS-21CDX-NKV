<?php

namespace App\Http\Controllers;

use App\Models\MPengunjung;
use Illuminate\Http\Request;

class Pengunjung extends Controller
{
    // buat inisialisasi untuk pengambilan model
    protected $model;

    // buat konstruktor
    function __construct()
    {
        // isi nilai variabel "$model"
        $this->model = new MPengunjung();
    }

    // buat fungsi untuk tambah data
    function viewData()
    {
        // jika data pengunjung tidak ada
        if (count($this->model->viewData()) == 0) {
            $data = [];
            $error = 1;
            $message = "Data Pengunjung Tidak Ditemukan !";
        }
        // jika data pengunjung ada/ tersedia
        else {
            // ambil medthod "viewData" dari model "MPengunjung"
            $data = $this->model->viewData();
            $error = 0;
            $message = "";
        }

        return response(["pengunjung" => $data, "error" => $error, "message" => $message], http_response_code());
    }
}