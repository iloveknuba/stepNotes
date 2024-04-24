import {Routes} from '@angular/router';
import {CardListComponent} from "./components/card-list/card-list.component";
import {CardDetailsComponent} from "./components/card-details/card-details.component";
import {AddCardComponent} from "./components/add-card/add-card.component";
import {TodoDetailsComponent} from "./components/todo-details/todo-details.component";
import {TodoComponent} from "./components/todo/todo.component";
import {SigninComponent} from "./components/Auth/signin/signin.component";
import {authguardGuard} from "./guards/authguard.guard";
import {SignupComponent} from "./components/Auth/signup/signup.component";

export const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: "full"},
  {path: 'notes', component: CardListComponent, canActivate: [authguardGuard]},
  {path: 'notes/:id', component: CardDetailsComponent, canActivate: [authguardGuard]},
  {path: 'lists/:id', component: TodoDetailsComponent, canActivate: [authguardGuard]},
  {path: 'lists', component: TodoComponent, canActivate: [authguardGuard]},
  {path: 'add', component: AddCardComponent, canActivate: [authguardGuard]},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
];
