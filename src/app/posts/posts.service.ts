import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable()
export class PostsService {
  constructor(private apiService: ApiService) { }

  getPosts() {
    return this.apiService.get('/posts')
      .map(posts => this.normalizePosts(posts));
  }

  normalizePosts(posts) {
    return posts.map(post => Object.assign({}, post, {
      author: 'katherine grant',
      date: new Date(),
      likeCount: 0,
    }));
  }

  updateLike(post) {
    return Object.assign({}, post, {
      likeCount: post.likeCount + 1
    });
  }

}
