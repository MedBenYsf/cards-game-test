import { Injectable } from '@angular/core';
import { Card } from './card.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiUrl = 'https://localhost:8000/cards';

  constructor(private httpclient: HttpClient) { }

  getCards(): Observable<any> {
    return this.httpclient.get(this.apiUrl);
  }

  getSortedCards(cards: Card[]): Card[] {
    return cards.sort((a, b)=> a.value - b.value);
  }
}
