import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.scss'],
})
export class MatToolbarComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
    const token = sessionStorage.getItem('access_token') || '';
    this.isLoggedIn = token?.length > 0 ? true : false;
    // console.log('isLoggedIn', this.isLoggedIn);
  }

  goToDashboard = () => {
    this.router.navigate(['/dashboard']);
  };

  logout = () => {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  };
}
