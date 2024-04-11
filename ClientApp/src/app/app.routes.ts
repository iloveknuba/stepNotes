import { Routes } from '@angular/router';
import {CardListComponent} from "./components/card-list/card-list.component";
import {CardDetailsComponent} from "./components/card-details/card-details.component";
import {AddCardComponent} from "./components/add-card/add-card.component";
import {TodoDetailsComponent} from "./components/todo-details/todo-details.component";
import {TodoComponent} from "./components/todo/todo.component";

export const routes: Routes = [
    {path:'', redirectTo:'notes', pathMatch:"full"},
    { path: 'notes', component: CardListComponent },
    { path: 'notes/:id', component: CardDetailsComponent },
    { path: 'lists/:id', component: TodoDetailsComponent},
    { path: 'lists', component: TodoComponent},
    { path: 'add', component: AddCardComponent }
];
