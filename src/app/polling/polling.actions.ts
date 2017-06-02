import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { NgRedux, dispatch } from '@angular-redux/store';

import { IAppState } from '../store';

@Injectable()
export class PollingActions {
  static readonly POLLING = {
    START: 'angularTraining/Polling/START',
    STOP: 'angularTraining/Polling/STOP',
  };

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) { }

  @dispatch()
  start() {
    return {
      type: PollingActions.POLLING.START
    };
  }

  @dispatch()
  stop() {
    return {
      type: PollingActions.POLLING.STOP
    };
  }

}
