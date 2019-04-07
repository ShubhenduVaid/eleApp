import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { LoginData } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLogin() {
    this.loginService.login(this.loginForm.value)
      .subscribe(
        (data: LoginData) => {
          if (data.accessToken) {
            this.router.navigate(['/list']);
          }
          this.openSnackBar(data.result);
        },
        (error) => {
          this.openSnackBar('Unable to login');
        }
      );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

}
