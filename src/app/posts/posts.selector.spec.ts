import { TestBed, inject } from '@angular/core/testing';

import { PostsSelector } from './posts.selector';

describe('PostsSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsSelector]
    });
  });

  it('should be created', inject([PostsSelector], (service: PostsSelector) => {
    expect(service).toBeTruthy();
  }));
});
