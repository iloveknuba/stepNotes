import {Component} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  loginForm!: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl( '', [Validators.required])
    })

  }

  login() {
    if (this.loginForm.valid) {
      this.userService.onLogin(this.loginForm.value)
        .subscribe(
          {
            next: data => {
              console.log(data);
              this.userService.storeAuthentication(data.accessToken, 30)
              this.router.navigate(['/notes'])
            },
            error: err => {
              console.log(err);
            }
          }
        )
    } else {
      this.loginForm.markAllAsTouched();
      console.log(this.loginForm.value);
    }
  }

}
