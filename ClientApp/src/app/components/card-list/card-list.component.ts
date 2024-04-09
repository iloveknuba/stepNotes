import {Component, OnInit} from '@angular/core';
import {CardService} from "../../services/card.service";
import {Card} from "../../models/card.model";
import {NgForOf} from "@angular/common";
import {ListService} from "../../services/list.service";
import {List} from "../../models/list.model";
import {RouterLink} from "@angular/router";
import {CardDetailsComponent} from "../card-details/card-details.component";


@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    CardDetailsComponent
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit{

  cards?: Card[];

  currentCard:Card = {};
  currentCardIndex = -1;


  constructor(private cardService: CardService,
              private listService: ListService) { }
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

    getMock(): void{
      this.cards = mock.map(item => {
        return {
          _id: item._id,
          type: item.type,
          title: item.title,
          text: item.text
        };
      });
    }
    chooseCard(card: Card, index: number): void{
      this.currentCard = card;
      this.currentCardIndex = index;
    }

}

const mock = [

  {
    '_id' : "6612dbcf0a5745e2594543c7",
    'type' : 'card',
    "title" : 'Shannon Clements',
    'text' : "asdasdasd"
  },
  {
    "_id" : "6612dbcf4462311242e0f7d3",
    'type' : 'card',
    "title" : "Shannon Clements",
    "text" : "asdasdasd"
  },
  {
    "_id" : "6612dbcf5ae731c271cf3fdf",
    'type' : 'card',
    "title" : 'Shannon Clements',
    "text" : "asdasdasd"
  },
  {
    "_id" : "6612dbcfff24ac84af8f8277",
    'type' : 'card',
    "title" : "Shannon Clements",
    "text" : "asdasdasd"
  },
  {
    "_id" : "6612dbcf466acd5121935076",
    'type' : 'card',
    "title" : "Shannon Clements",
    "text" : "asdasdasd"
  },
  {
    "_id" : "6612dbcf6e8f523b49364ece",
    'type' : 'card',
    "title" : "Shannon Clements",
    "text" : "asdasdasd"
  }

]
