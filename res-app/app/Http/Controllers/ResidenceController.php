<?php

namespace App\Http\Controllers;

use App\DTOs\ResidencesDTO;
use App\DTOs\UserDTO;
use App\Models\Residence;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ResidenceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {

        $residence = Residence::with('citizens.user')->findOrFail($request->id);
        $residenceDTO = new ResidencesDTO(Collection::make([$residence]))->toArray()[0];
        $userIds = $residence->citizens->pluck('user_id');
        $citizens = User::find($userIds);
        $citizensDTO = $citizens->map(fn($citizen) => (new UserDTO($citizen))->toArray());

        return Inertia::render('dashboard/residence', [
            'residence' => $residenceDTO,
            'citizens'  => $citizensDTO,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Residence $Residence)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Residence $residence)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Residence $residence)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(residence $residence)
    {
        //
    }
}
