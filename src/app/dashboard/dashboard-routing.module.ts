import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from '../posts/create-post/create-post.component';
import { PostsDetailsComponent } from '../posts/posts-details/posts-details.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'post-details', component: PostsDetailsComponent  },
  { path: 'create-post', component: CreatePostComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
