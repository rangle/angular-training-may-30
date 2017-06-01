import { Reducer } from 'redux';

import { PostsActions } from './posts.actions';

interface IPostsReducer {
  all: any[];
}

const initialState = { all: [] };

export const postsReducer: Reducer<IPostsReducer> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PostsActions.POSTS.FETCH:
      return { all: action.payload };

    case PostsActions.POSTS.UPDATE:
      return {
        all: state.all.map(post => {
          if (post.id === action.payload.id) {
            return action.payload;
          }

          return post;
        }),
      };

    default:
      return state;
  }
}
