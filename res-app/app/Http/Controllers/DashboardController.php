<?php

namespace App\Http\Controllers;

use App\DTOs\UserDTO;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index() : Response {
    $dto = new UserDTO(Auth::user());
    $user = $dto->toArray();
    return Inertia::render('dashboard/dashboard',[
        'user'=> $user
    ]);
    }
}
