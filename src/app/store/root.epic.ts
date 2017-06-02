import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';

import { PollingEpic } from '../polling/polling.epic';

@Injectable()
export class RootEpics {
  constructor(private pollingEpic: PollingEpic){}

  public createEpics() {
    return [
      this.pollingEpic.createEpic(),
      // more epics go here
    ];
  }
}
