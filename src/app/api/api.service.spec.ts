import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

const mockHttp = {
  get: null,
  delete: null,
  post: null,
} as Http;

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    spyOn(mockHttp, 'get')
      .and.returnValue(Observable.of({
        json: () => 'mock data',
      }));

    spyOn(mockHttp, 'delete')
      .and.returnValue(Observable.fromPromise(new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            json: () => 'delete successful',
          });
        }, 1000);
      })));

    spyOn(mockHttp, 'post')
      .and.returnValue(Observable.of({
        json: () => 'post successful',
      }));

    apiService = new ApiService(mockHttp);
  });

  describe('get', () => {

    it('should make a get request', () => {
      apiService.get('/my-end-point')
        .subscribe((data) => {
          expect(mockHttp.get)
            .toHaveBeenCalledWith('//jsonplaceholder.typicode.com/my-end-point');
          expect(data).toEqual('mock data');
        });
    });

  });


  describe('delete', () => {

    it('should make a delete request', (done) => {
      apiService.delete('/my-end-point')
        .subscribe((data) => {
          expect(mockHttp.delete)
            .toHaveBeenCalledWith('//jsonplaceholder.typicode.com/my-end-point');

          expect(data).toEqual('delete successful');
          done();
        });
    });

  });


  describe('post', () => {

    it('should make a post request with payload', () => {
      const makePost = apiService.post('/my-end-point');
      makePost({ post: 'data' })
        .subscribe((data) => {
          expect(mockHttp.post)
            .toHaveBeenCalledWith('//jsonplaceholder.typicode.com/my-end-point');

          expect(data).toEqual('post successful');
        });
    });

  });
});
