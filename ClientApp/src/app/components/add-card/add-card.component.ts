import { Component } from '@angular/core';
import {Card} from "../../models/card.model";
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent {

  card: Card = {
    type: 'card',
    title: '',
    text: '',
    tasks: [{text:'', completed: false}]
  };
  submitted = false;
  constructor(private cardService: CardService) {}

  saveCard(): void {
    const data = {
      type: this.card.type,
      title: this.card.title,
      text: this.card.text,
      tasks: this.card.tasks
    };
    this.cardService.create(data)
    .subscribe({
      next: data => {
        console.log(data);
        this.submitted = true;
      },
      error: (err: Error) => {console.log(err)}
    })
  }
  newCard(): void {
    this.submitted = false;
    this.card = {
      type: 'card',
      title: '',
      text: '',
      tasks: [{text: '', completed: false}]
    };
  }

}
