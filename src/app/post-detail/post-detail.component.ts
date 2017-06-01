import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select } from '@angular-redux/store';

import { UiActions } from '../ui';
import { PostsActions } from '../posts';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @select(state => {
    const id = state.ui.activePostId;
    const posts = state.posts.all;
    return posts.find(post => post.id === id);
  }) activePost$;

  post: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private uiActions: UiActions,
    private postsActions: PostsActions,
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params) => {
        this.uiActions.updateActivePostId(Number(params.id));
      });

    this.activePost$.subscribe(post => {
      this.post = post;
    })
  }

}
