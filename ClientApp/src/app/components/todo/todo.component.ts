import {Component, OnInit} from '@angular/core';
import {Card} from "../../models/card.model";
import {List} from "../../models/list.model";
import {CardService} from "../../services/card.service";
import {ListService} from "../../services/list.service";
import {CardDetailsComponent} from "../card-details/card-details.component";
import {NgForOf} from "@angular/common";
import {TodoDetailsComponent} from "../todo-details/todo-details.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CardDetailsComponent,
    NgForOf,
    TodoDetailsComponent
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  lists?: List[];

  currentList : List = {};
  currentListIndex = -1;

  constructor(private listService: ListService) { }
  ngOnInit(): void {
    this.getLists()
  }


  getLists(){
    this.listService.getAll()
      .subscribe({
        next:lists=>{
          this.lists = lists;
          console.log(this.lists);
        },
        error: err => {console.log(err)}
      })
  }
  chooseList(list: List, index: number): void{
    this.currentList = list;
    this.currentListIndex = index;
  }
}
