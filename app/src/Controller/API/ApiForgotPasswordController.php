<?php

namespace App\Controller\API;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

final class ApiForgotPasswordController extends AbstractController
{
    #[Route('/forgot-password', name: 'api_forgot_password', methods: ['POST'])]
    public function index(Request $req, EntityManagerInterface $em): JsonResponse
    {
        $data = $req->toArray();
        $rep = $em->getRepository(User::class);
        $user = $rep->findOneBy(["email" => $data['email']]);
        if(!$user){
            return $this->json(['error' => 'User not found'], 404);
        }
        /**
         * TODO
         * Finir l'envois des emails pour 'forgot password' ici
         */
        return $this->json([
            'user' => $user?->getEmail(),
        ]);
    }
}
