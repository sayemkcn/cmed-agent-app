import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    const username = new FormControl();
    const password = new FormControl();
    this.loginForm = new FormGroup({
      username,
      password
    });
  }

  login(value): void {
    this.authService.login(value.username, value.password);
  }
}
