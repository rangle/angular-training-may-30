import { Component, OnInit } from '@angular/core';

import { PostsActions } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(private postsActions: PostsActions) {}

  ngOnInit() {
    this.postsActions.fetch();
  }
}
