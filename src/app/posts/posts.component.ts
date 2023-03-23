import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../shared/services/api.service';
import { Subscription } from 'rxjs';
import { Post, Posts } from '../shared/interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postsSubscription: Subscription;
  posts: Post[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.postsSubscription = this.apiService.getPosts().subscribe({
      next: (response: Posts) => (this.posts = response.posts),
      error: (error) => console.log(error),
    });
  }

  showPostDetails(post: Post) {
    this.router.navigate(['post-details'], {
      relativeTo: this.route,
      state: { post },
    });
  }
}
