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

    // buat fungsi untuk tambah data
    function saveData(Request $req)
    {
        // ambil data email
        $email = $req->email;

        // jika email sudah ada
        if (count($this->model->checkSaveData($email)) != 0) {
            $error = 1;
            $message = "Data Gagal Disimpan (NPM Sudah Terpakai !)";
        }
        // jika email belum ada
        else {
            // ambil request
            $nama = $req->nama;
            $telepon = $req->telepon;
            $alamat = $req->alamat;

            // proses simpan data
            $this->model->saveData($email, $nama, $telepon, $alamat);

            $error = 0;
            $message = "Data Berhasil Disimpan";
        }

        return response(["error" => $error, "message" => $message], http_reponse_code());
    }

    // buat fungsi hapus data
    function deleteData($email)
    {
        // cek apakah data pengunjung (email) tersedia/tidak pada model checkData
        // jika data tersedia
        if (count($this->model->checkData($email)) == 1) {
            // panggil model "deleteData"
            $this->model->deleteData($email);

            $error = 0;
            $message = "Data Berhasil Dihapus";
        }
        // jika data tidak tersedia
        else {
            $error = 1;
            $message = "Data Gagal Dihapus !";
        }
        return response(["error" => $error, "message" => $message], http_response_code());
    }

    // buat fungsi untuk detail data
    function detailData($email)
    {
        // isi nilai variabel "result" dari fungsi "detailData" dari model "MPengunjung" sesuai dengan isi parameter "id"
        $data = $this->model->detailData($email);

        // kembalikan nilai variabel "result" ke dalam object "pengunjung"
        return response(["mahasiswa" => $data], http_response_code());
    }

    // buat fungsi untuk edit data
    function editData($email_lama, Request $req)
    {
        // ambil data email
        $email = $req->email;

        // cek apakah data pengunjung (email) tersedia/tidak pada model checkEditData
        // jika ada tersedia
        if (count($this->model->checkEditData($email_lama, $email)) == 0) {
            $nama = $req->nama;
            $telepon = $req->telepon;
            $alamat = $req->alamat;

            // panggil model "editData"
            $this->model->editData($email, $nama, $telepon, $alamat, $email_baru);

            $error = 0;
            $message = "Data Berhasil Diubah";
        }
        // jika data tidak tersedia
        else {
            $error = 1;
            $message = "Data Gagal Diubah (Email Sudah Terpakai !)";
        }

        return response(["error" => $error, "message" => $message], http_response_code);
    }
}