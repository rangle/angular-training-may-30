import { Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const routeConfig: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
];
