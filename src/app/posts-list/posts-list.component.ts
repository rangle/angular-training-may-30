import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

import { PostsActions } from '../posts.actions';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  query: string = 'this is the search query';
  @select(['posts', 'all']) posts$;

  constructor(private postsActions: PostsActions) {}

  ngOnInit() {
    this.postsActions.fetch();
  }
}
