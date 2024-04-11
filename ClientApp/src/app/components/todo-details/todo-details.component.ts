import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../models/card.model";
import {List} from "../../models/list.model";

import {CardService} from "../../services/card.service";
import {ListService} from "../../services/list.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit{
  @Input() viewMode = false;

  @Input() currentList: List = {
    title:'',
    text:'',
    type:'todo',
    tasks:[{text:'',completed:false}]
  };

  taskText = '';
  taskCompleted = false;
  constructor(private listService: ListService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.getCardDetails(this.route.snapshot.params["id"])
    }
  }

  getCardDetails(id: string){
    this.listService.get(id)
      .subscribe({
        next: cardDetails => {
          this.currentList = cardDetails;
          console.log(this.currentList);
        },
        error: err => {console.log(err)}
      });
  }
  deleteCard() {
    this.listService.delete(this.currentList?.id)
      .subscribe({
        next: cardDetails => {
          this.router.navigate(['/notes']);
        },
        error: err => {console.log(err)}
      })
  }
  updateCard() {
    this.listService.update(this.currentList?.id, this.currentList)
      .subscribe({
        next: cardDetails => {
          console.log(cardDetails);
          this.router.navigate(['/lists'])
        },
        error: err => {console.log(err)}
      })
  }
  addTask(): void {
    if (this.taskText == '') return;
    this.currentList.tasks?.push( {
      text: this.taskText,
      completed: false
    });
    this.taskText = '';
    this.taskCompleted = false;
  }
  removeTask(index: number): void {
    this.currentList.tasks?.splice(index, 1);
  }
}
