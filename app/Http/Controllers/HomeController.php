<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function home() { return view('app'); }
    public function shop() { return view('app'); }
    public function about() { return view('app'); }
    public function productDetail($id) { return view('app', compact('id')); }
    public function cart() { return view('app'); }
    public function checkout() { return view('app'); }
}