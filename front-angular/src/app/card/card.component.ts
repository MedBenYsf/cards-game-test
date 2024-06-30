import { NgStyle } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Card } from './card.interface';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cards = signal<Card[]>([]);
  cardService = inject(CardService);

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards().subscribe({
      next: (data) => {
        this.cards.set(data.cards);
      }
    });
  }
  sortCards(): void {
    this.cards.set(this.cardService.getSortedCards(this.cards()));
  }

}
