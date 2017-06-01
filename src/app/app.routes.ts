import { Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import {
  PostDetailComponent,
  CommentsComponent,
  RelatedComponent,
} from './post-detail';

export const routeConfig: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsListComponent },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
    children: [
      { path: 'comments', component: CommentsComponent },
      { path: 'related', component: RelatedComponent },
    ],
  },
];
