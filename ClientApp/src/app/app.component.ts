import {Component} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {UserService} from "./services/user.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClientApp';

  constructor(private userService: UserService,
  private router: Router) {
  }

  logout() {
    try {
      this.userService.clearAuthentication()
      this.router.navigate(['/signin'])
    } catch (e) {
      console.log(e)
    }
  }
}
