import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  query: string = 'this is the search query';

  posts = [{
    id: 1,
    title: 'Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quis error, a aliquid porro quia sint eaque laboriosam itaque perspiciatis officia sunt dicta, eius esse deleniti? Sapiente dolore, asperiores sint.',
    author: 'robin darnell',
    date: new Date(),
    likeCount: 3,
  }, {
    id: 2,
    title: 'Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quis error, a aliquid porro quia sint eaque laboriosam itaque perspiciatis officia sunt dicta, eius esse deleniti? Sapiente dolore, asperiores sint.',
    author: 'robin darnell',
    date: new Date(),
    likeCount: 0,
  }, {
    id: 3,
    title: 'Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quis error, a aliquid porro quia sint eaque laboriosam itaque perspiciatis officia sunt dicta, eius esse deleniti? Sapiente dolore, asperiores sint.',
    author: 'robin darnell',
    date: new Date(),
    likeCount: 0,
  }];

  constructor() { }

  ngOnInit() {
  }

  updateLike(id: number) {
    const idx = this.posts
      .findIndex((post) => post.id === id);

    this.posts[idx].likeCount++;

    // Alternative approach:
    // this.posts = this.posts.map(post => {
    //   if (post.id === id) {
    //     post.likeCount++;
    //   }
    //
    //   return post;
    // })
  }

}
