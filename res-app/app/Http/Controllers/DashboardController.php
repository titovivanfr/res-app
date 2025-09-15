<?php

namespace App\Http\Controllers;

use App\DTOs\ResidencesDTO;
use App\DTOs\UserDTO;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index() : Response {
    $du = new UserDTO(Auth::user());
    $dr = new ResidencesDTO(Auth::user()->residences);
    $user = $du->toArray();
    $residences = $dr->toArray();
    return Inertia::render('dashboard/dashboard',[
        'user'=> $user,
        'residences' => $residences
    ]);
    }
}
