import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  
  constructor(private router: Router,
    private route: ActivatedRoute){}

  posts: any = [
    {
      id: '1',
      name: 'test-1',
      description: ' post-1 description sample',
    },
    {
      id: '2',
      name: 'test-2',
      description: ' post-2 description sample',
    },
  ];

  showPostDetails(post: any){
    console.log('post: ', post)
    this.router.navigate(['post-details'], { relativeTo: this.route, state: {post}})
  }
}
