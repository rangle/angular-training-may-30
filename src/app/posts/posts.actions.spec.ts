import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { PostsActions } from './posts.actions';
import { PostsService } from './posts.service';
import { IAppState } from '../store';

const mockPosts = [{
  "userId": 1,
  "id": 1,
  "title": "sunt ...",
  "body": "..."
}, {
  "userId": 2,
  "id": 2,
  "title": "sunt ...",
  "body": "..."
}];

const mockPostsService = {
  getPosts: null,
  updateLike: null,
} as PostsService;

const mockNgRedux = {
  dispatch: null
} as NgRedux<IAppState>;

describe('Posts Actions', () => {
  let postsActions: PostsActions;

  beforeEach(() => {
    spyOn(mockNgRedux, 'dispatch');

    postsActions = new PostsActions(mockPostsService, mockNgRedux);
  });

  it('should fetch posts and dispatch update to reducer', () => {
    spyOn(mockPostsService, 'getPosts')
      .and.returnValue(Observable.of(mockPosts));

    postsActions.fetch();
    expect(mockPostsService.getPosts).toHaveBeenCalled();

    expect(mockNgRedux.dispatch).toHaveBeenCalledWith({
      type: PostsActions.POSTS.FETCH,
      payload: mockPosts,
    });
  });

  it('should fetch posts and dispatch error if fetch failed', () => {
    spyOn(mockPostsService, 'getPosts')
      .and.returnValue(Observable.throw('FETCH Failed'));

    postsActions.fetch();
    expect(mockPostsService.getPosts).toHaveBeenCalled();

    expect(mockNgRedux.dispatch).toHaveBeenCalledWith({
      type: PostsActions.POSTS.FETCH_FAILED,
      payload: 'FETCH Failed',
    });
  });

});
