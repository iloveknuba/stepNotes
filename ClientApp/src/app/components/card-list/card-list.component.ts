import {Component, OnInit} from '@angular/core';
import {CardService} from "../../services/card.service";
import {Card} from "../../models/card.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit{

  cards?: Card[];
  constructor(private cardService: CardService) { }
    ngOnInit(): void {
        this.getCards();
    }

    getCards(): void {
    this.cardService.getAll()
      .subscribe({
        next: cards => {
          this.cards = cards;
          console.log(this.cards);
        },
        error: err => {console.log(err)}
      })
    }
}
