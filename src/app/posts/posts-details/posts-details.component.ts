import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss']
})
export class PostsDetailsComponent {
  post: any = {} 
  
  constructor(
    private location: Location) {
      const state = this.location.getState() || {} as any
      console.log('location: ', state.post)
      this.post = state.post
  }

  goToDashboard() {
    this.location.back()
  }
}
