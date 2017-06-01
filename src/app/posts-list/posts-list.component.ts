import { Component, OnInit } from '@angular/core';

import { PostsActions } from '../posts/posts.actions';
import { PostsSelector } from '../posts/posts.selector';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  query: string = 'this is the search query';

  constructor(
    private postsActions: PostsActions,
    private postsSelector: PostsSelector,
  ) {}

  ngOnInit() {
    this.postsActions.fetch();
  }
}
