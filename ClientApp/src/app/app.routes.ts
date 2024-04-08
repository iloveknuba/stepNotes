import { Routes } from '@angular/router';
import {CardListComponent} from "./components/card-list/card-list.component";
import {CardDetailsComponent} from "./components/card-details/card-details.component";
import {AddCardComponent} from "./components/add-card/add-card.component";

export const routes: Routes = [
    { path: 'notes', component: CardListComponent },
    { path: 'notes/:id', component: CardDetailsComponent },
    { path: 'add', component: AddCardComponent }
];
