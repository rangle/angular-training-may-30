import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { NgRedux, dispatch } from '@angular-redux/store';

import { PostsService } from './posts.service';
import { IAppState } from '../store';

@Injectable()
export class PostsActions {
  static readonly POSTS = {
    FETCH: 'angularTraining/Posts/FETCH',
    UPDATE: 'angularTraining/Posts/UPDATE',
  };

  constructor(
    private postsService: PostsService,
    private ngRedux: NgRedux<IAppState>
  ) { }

  fetch() {
    this.postsService.getPosts()
      .subscribe(posts => {
        this.ngRedux.dispatch({
          type: PostsActions.POSTS.FETCH,
          payload: posts,
        });
      });
  }

  @dispatch()
  updateLike(post)  {
    return {
      type: PostsActions.POSTS.UPDATE,
      payload: this.postsService.updateLike(post),
    };
  }
}
