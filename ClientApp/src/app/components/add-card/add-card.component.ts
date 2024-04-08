import { Component } from '@angular/core';
import {Card} from "../../models/card.model";
import { CardService } from '../../services/card.service';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent {

  card: Card = {
    type: 'card',
    title: '',
    text: ''
  };

  isCard = false;
  submitted = false;
  isTodo = false;
  constructor(private cardService: CardService) {}

  saveCard(): void {
    const data = {
      type: this.card.type,
      title: this.card.title,
      text: this.card.text
    };
    if(this.isCard) {
      data.type = 'card'
      this.cardService.create(data)
        .subscribe({
          next: data => {
            console.log(data);
            this.submitted = true;
          },
          error: (err: Error) => {
            console.log(err)
          }
        })
    }
    else if(!this.isTodo) {}
  }
  newCard(): void {
    this.submitted = false;
    this.card = {
      type: 'card',
      title: '',
      text: ''
    };
  }

}
