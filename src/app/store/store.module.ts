import { NgModule } from '@angular/core';
import {
  NgReduxModule, NgRedux, DevToolsExtension
} from '@angular-redux/store';

// Redux ecosystem stuff.
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { postsReducer } from '../posts';
import { uiReducer } from '../ui';
import { RootEpics } from './root.epic';

export interface IAppState {
  posts: any;
  ui: any;
};


/**
 * Root Reducer
 */
const rootReducer = combineReducers<IAppState>({
  posts: postsReducer,
  ui: uiReducer,
});

@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    rootEpics: RootEpics,
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer, // root reducer
      undefined,  // initial state
      [ createLogger(), ...rootEpics.createEpics() ], // middlewares
      devTools.isEnabled() ? [ devTools.enhancer() ] : [], // enhancers
    );
  }
}
