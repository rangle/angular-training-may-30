import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

import { PostsActions, PostsSelector } from '../posts';
import { UiActions } from '../ui';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  @select(['ui', 'query']) query$;

  constructor(
    private postsActions: PostsActions,
    private uiActions: UiActions,
    private postsSelector: PostsSelector,
  ) {}

  ngOnInit() {
    this.postsActions.fetch();
  }
}
