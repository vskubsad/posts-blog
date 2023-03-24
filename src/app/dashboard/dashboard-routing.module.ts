import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../shared/services/auth-guard.service';

import { CreatePostComponent } from '../posts/create-post/create-post.component';
import { PostsDetailsComponent } from '../posts/posts-details/posts-details.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuardService] },
  {
    path: 'post-details',
    component: PostsDetailsComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'create-post',
    component: CreatePostComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
