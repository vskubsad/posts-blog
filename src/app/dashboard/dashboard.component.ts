import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor( private router: Router,
    private route: ActivatedRoute){}

  createPost(){
    this.router.navigate(['create-post'], { relativeTo: this.route})
  }
}
