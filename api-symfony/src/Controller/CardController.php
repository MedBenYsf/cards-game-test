<?php

namespace App\Controller;

use App\Entity\Card;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class CardController extends AbstractController
{
    #[Route('/cards', methods: ['GET'], name: 'app_cards')]
    public function index(): JsonResponse
    {
        $color = ['red', 'green', 'blue', 'yellow', 'purple', 'brown', 'orange', 'pink', 'grey', 'aqua'];
        $cards = [];
        for ($i=0; $i<10; $i++) {
            $card = new Card;
            $card->setValue(rand(1, 12))
                 ->setColor($color[array_rand($color)]);
            array_push($cards, $card);
        }
        return $this->json([
            'cards' => $cards,
        ]);
    }
}
