import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { Observable } from 'rxjs';

import { PollingActions } from './polling.actions';
import { ApiService } from '../api/api.service';


const updateComments = comments => ({
  type: 'COMMENTS_UPDATED',
  payload: comments,
});

const handleError = e => Observable.of({
  type: 'COMMENTS_FETCH_FAILED',
  payload: e,
});

const getComments = () =>
  this.apiService.get('/comments')
    .map(updateComments)
    .catch(handleError);

@Injectable()
export class PollingEpic {
  constructor(
    private apiService: ApiService,
  ) {}

  public createEpic() {
    return createEpicMiddleware(this.createPollingEpic());
  }

  private createPollingEpic() {
    return action$ => action$
      .ofType(PollingActions.POLLING.START)
      .switchMap(({ payload = 1000 }) =>
        Observable.interval(payload)
          .takeUntil(action$.ofType(PollingActions.POLLING.STOP))
          .mergeMap(getComments)
      );
  }
}
