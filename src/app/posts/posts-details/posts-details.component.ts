import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { Post } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss'],
})
export class PostsDetailsComponent {
  post: Post;

  constructor(private location: Location) {
    const state = this.location.getState() || ({} as any);
    this.post = state.post;
  }

  goToDashboard() {
    this.location.back();
  }
}
