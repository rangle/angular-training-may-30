import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PostsService {

  stateSubject = new BehaviorSubject({
    posts: []
  });

  state$ = this.stateSubject.asObservable();
  posts$ = this.state$.pluck('posts');

  constructor() { }

  getPosts() {
    this.stateSubject.next({
      posts: [
        {
          id: 1,
          title: 'Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quis error, a aliquid porro quia sint eaque laboriosam itaque perspiciatis officia sunt dicta, eius esse deleniti? Sapiente dolore, asperiores sint.',
          author: 'robin darnell',
          date: new Date(),
          likeCount: 3,
        },
        {
          id: 2,
          title: 'Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quis error, a aliquid porro quia sint eaque laboriosam itaque perspiciatis officia sunt dicta, eius esse deleniti? Sapiente dolore, asperiores sint.',
          author: 'robin darnell',
          date: new Date(),
          likeCount: 0,
        },
        {
          id: 3,
          title: 'Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quis error, a aliquid porro quia sint eaque laboriosam itaque perspiciatis officia sunt dicta, eius esse deleniti? Sapiente dolore, asperiores sint.',
          author: 'robin darnell',
          date: new Date(),
          likeCount: 0,
        }
      ],
    });
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
