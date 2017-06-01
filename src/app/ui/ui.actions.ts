import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { dispatch } from '@angular-redux/store';
import { IAppState } from '../store';

@Injectable()
export class UiActions {
  static readonly UI = {
    UPDATE_QUERY: 'angularTraining/Ui/UPDATE_QUERY',
    UPDATE_ACTIVE_POST_ID: 'angularTraining/Ui/UPDATE_ACTIVE_POST_ID',
  };

  @dispatch()
  updateQuery(value)  {
    return {
      type: UiActions.UI.UPDATE_QUERY,
      payload: value,
    };
  }

  @dispatch()
  updateActivePostId(value)  {
    return {
      type: UiActions.UI.UPDATE_ACTIVE_POST_ID,
      payload: value,
    };
  }
}
