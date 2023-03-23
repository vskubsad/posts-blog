import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.scss']
})
export class MatToolbarComponent {

  constructor(private router: Router) {}
  
  goToDashboard = () => {
    this.router.navigate(['/dashboard']);
  }
  
  logout = () => {
    this.router.navigate(['/login']);
  }
}
