import { Component, OnInit } from '@angular/core';

import { PostsActions } from './posts';
import { PollingActions } from './polling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(
    private postsActions: PostsActions,
    private pollingActions: PollingActions
  ) {}

  ngOnInit() {
    this.pollingActions.start();
    this.postsActions.fetch();
  }
}
