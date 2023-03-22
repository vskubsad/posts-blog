import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PostsComponent } from '../posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostsDetailsComponent } from '../posts/posts-details/posts-details.component';

@NgModule({
  declarations: [DashboardComponent, PostsComponent, PostsDetailsComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
