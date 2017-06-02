import { postsReducer } from './posts.reducer';
import { PostsActions } from './posts.actions';

describe('Posts Reducer', () => {
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

  it('should generate initial state', () => {
    const state = postsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({ all: [] });
  });

  it('should update all posts', () => {
    const state = postsReducer(undefined, {
      type: PostsActions.POSTS.FETCH,
      payload: mockPosts,
    });

    expect(state).toEqual({ all: mockPosts });
  });

  it('should update a specific post', () => {
    const updatedPost = {
      "userId": 2,
      "id": 2,
      "title": "new title",
      "body": "new body"
    };

    const state = postsReducer({ all: mockPosts }, {
      type: PostsActions.POSTS.UPDATE,
      payload: updatedPost,
    });

    expect(state.all[1]).toEqual(updatedPost);
  });

});
