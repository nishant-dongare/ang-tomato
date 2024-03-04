import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  registerForm: FormGroup;
  isSubmitted: boolean = false;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get fc() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;
    else {
      // Perform registration logic here
      console.log('Registration successful!', this.registerForm.value);
      this.userService
        .register({
          username: this.fc['username'].value,
          email: this.fc['email'].value,
          password: this.fc['password'].value,
        })
        .subscribe(() => {
          this.router.navigateByUrl(this.returnUrl);
        });
    }
  }
}
