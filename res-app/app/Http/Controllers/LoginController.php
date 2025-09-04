<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request): RedirectResponse
    {

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ],[
            'email.required'=> "L'e-mail est requis",
            'password.required'=> "Mot de passe est requis",
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }
 
        return back()->withErrors([ 
            'email' => "Les informations d'identification fournies ne correspondent pas à nos dossiers",
            'password' => "Les mots de passe ne sont pas corrects"
            ])
            ->onlyInput(['email', 'password']);
    }
}
