import {Component} from '@angular/core';
import {Card} from "../../models/card.model";
import {CardService} from '../../services/card.service';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {ListService} from "../../services/list.service";
import {List} from "../../models/list.model";

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    RouterLink,
    NgForOf,
    NgOptimizedImage
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
  list: List = {
    type: 'todo',
    title: '',
    text: '',
    tasks: [{text: 'Sample task', completed: false}]
  }

  title = '';
  text = '';

  taskText = '';
  chosenCard = '';
  submitted = false;

  constructor(private cardService: CardService,
              private listService: ListService) {
  }

  save() {
    this.chosenCard == 'card' ? this.saveCard() : this.saveTodo();
  }

  saveCard(): void {
    const data = {
      type: this.card.type,
      title: this.title,
      text: this.text
    };
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

  saveTodo(): void {
    const data = {
      type: this.list.type,
      title: this.title,
      text: this.text,
      tasks: this.list.tasks
    };
    if (data.text == '' || data.title == '') return;
    this.listService.create(data)
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

  addTask(): void {
    if (this.taskText == '') return;
    this.list.tasks?.push({
      text: this.taskText,
      completed: false
    });
    this.taskText = '';
  }

  removeTask(index: number): void {
    this.list.tasks?.splice(index, 1);
  }

}
