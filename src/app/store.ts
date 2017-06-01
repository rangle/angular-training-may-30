import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore
} from 'redux';
import { NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

import { postsReducer } from './posts';
import { uiReducer } from './ui.reducer';

export interface IAppState {
  posts: any;
  ui: any;
};

const rootReducer = combineReducers<IAppState>({
  posts: postsReducer,
  ui: uiReducer,
});

export const store: Store<IAppState> = createStore(
  rootReducer,
  applyMiddleware(createLogger())
);
