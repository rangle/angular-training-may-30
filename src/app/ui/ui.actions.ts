import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { dispatch } from '@angular-redux/store';
import { IAppState } from '../store';

@Injectable()
export class UiActions {
  static readonly UI = {
    UPDATE_QUERY: 'angularTraining/Ui/UPDATE_QUERY',
  };

  @dispatch()
  updateQuery(value)  {
    console.log(value);
    return {
      type: UiActions.UI.UPDATE_QUERY,
      payload: value,
    };
  }
}
