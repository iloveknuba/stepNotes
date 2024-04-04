import {Component, Input, OnInit} from '@angular/core';
import { Card } from '../../models/card.model';
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent implements OnInit{

  @Input()
  card?: Card ={
    type: "card",
    title:'',
    text:'',
    tasks: [{text: '', completed: false}]
  };
  constructor(private cardService: CardService) {}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  deleteCard(card: Card) {}
  updateCard(card: Card) {}
}
