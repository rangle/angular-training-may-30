import { TestBed, inject } from '@angular/core/testing';

import { PostsSelectorService } from './posts-selector.service';

describe('PostsSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsSelectorService]
    });
  });

  it('should be created', inject([PostsSelectorService], (service: PostsSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
