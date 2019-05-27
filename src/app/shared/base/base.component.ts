import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';

@Component({
  selector: 'app-base',
  template: ``,
  styleUrls: []
})
export class BaseComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  protected handleError(err) {
    if (err.status === 401) {
      this.authService.refreshToken();
    }
  }
}
