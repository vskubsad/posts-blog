import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.scss'],
})
export class MatToolbarComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {
    this.isUserLoggedIn();
  }

  goToDashboard = () => {
    this.router.navigate(['/dashboard']);
  };

  logout = () => {
    sessionStorage.clear();
    this.loginService.changeLoginStatus(false)
    this.router.navigate(['/login']);
  };

  isUserLoggedIn = () => {
    this.loginService.loginStatus.subscribe({
      next: response => {
        // console.log('login: ', response);
        this.isLoggedIn = response
      },
      error: error => console.error(error)
    })
  }
}
