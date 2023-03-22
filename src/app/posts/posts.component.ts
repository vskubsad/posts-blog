import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:4000/api/posts').subscribe(
      (data: any) => {
        console.log(data);
        this.posts = data?.posts;
      },
      (error) => console.log('Error: ', error)
    );
  }

  showPostDetails(post: any) {
    console.log('post: ', post);
    this.router.navigate(['post-details'], {
      relativeTo: this.route,
      state: { post },
    });
  }
}
