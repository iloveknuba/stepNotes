import {Component, Input, OnInit} from '@angular/core';
import { Card } from '../../models/card.model';
import {CardService} from "../../services/card.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {List} from "../../models/list.model";
import {ListService} from "../../services/list.service";

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    FormsModule
  ],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent implements OnInit{


  @Input() viewMode = false;

  @Input() currentCard: Card = {
    title: '',
    text: '',
    type: 'card'
  };

  constructor(private cardService: CardService,
  private route: ActivatedRoute,
  private router: Router) {
  }
    ngOnInit(): void {
      if (!this.viewMode) {
        this.getCardDetails(this.route.snapshot.params["id"])
      }
  }

    getCardDetails(id: string){

    this.cardService.get(id)
      .subscribe({
        next: cardDetails => {
          this.currentCard = cardDetails;
          console.log(this.currentCard);
        },
        error: err => {console.log(err)}
      });
    }
  deleteCard() {
    this.cardService.delete(this.currentCard?.id)
      .subscribe({
        next: cardDetails => {
          this.router.navigate(['/notes']);
        },
        error: err => {console.log(err)}
      })
  }
  updateCard() {
    this.cardService.update(this.currentCard?.id, this.currentCard)
      .subscribe({
        next: cardDetails => {
          console.log(cardDetails);
          this.router.navigate(['/notes'])
        },
        error: err => {console.log(err)}
      })
  }
}
