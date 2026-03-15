import { Component } from '@angular/core';
import { CardLabel } from "./card-label/card-label";

@Component({
  selector: 'app-card',
  imports: [CardLabel],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

}
