<?php

namespace App\Controller\API;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

final class ApiForgotPasswordController extends AbstractController
{
    #[Route('/forgot-password', name: 'api_forgot_password', methods: ['POST'])]
    public function index(Request $req, User $user): JsonResponse
    {

        return $this->json([
            'req' => $req,
            'user' => $user,
        ]);
    }
}
