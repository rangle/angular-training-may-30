import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable()
export class PostsService {

  private stateSubject = new BehaviorSubject({
    posts: []
  });

  public state$ =
    this.stateSubject.publishReplay(1).refCount();
  public posts$ = this.state$.pluck('posts');

  constructor(private apiService: ApiService) { }

  getPosts() {
    this.apiService.get('/posts')
      .map(posts => this.normalizePosts(posts))
      .subscribe(posts => {
        this.stateSubject.next({ posts });
      });
  }

  normalizePosts(posts) {
    return posts.map(post => Object.assign({}, post, {
      author: 'katherine grant',
      date: new Date(),
      likeCount: 0,
    }));
  }

  updateLike(id: number) {
    const posts = this.stateSubject.getValue().posts;

    const idx = posts.findIndex((post) => post.id === id);
    posts[idx].likeCount++;

    this.stateSubject.next({
      posts: posts,
    });
  }

}
