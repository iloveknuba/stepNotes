import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  loginForm!: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl( '', [Validators.required])
    })

  }

  signUp() {
    if (this.loginForm.valid) {
      this.userService.onSighup(this.loginForm.value)
        .subscribe(
          {
            next: data => {
              console.log(data);
              this.router.navigate(['/signin'])
            },
            error: err => {
              console.log(err);
            }
          }
        )
    } else {
      this.loginForm.markAllAsTouched();

    }
  }
}
