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
import { uiReducer } from './ui';

export interface IAppState {
  posts: any;
  ui: any;
};

const middleware = [createLogger()];

const composeEnhancers =
  typeof window === 'object' &&
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const rootReducer = combineReducers<IAppState>({
  posts: postsReducer,
  ui: uiReducer,
});

export const store: Store<IAppState> = createStore(
  rootReducer,
  enhancer
);
