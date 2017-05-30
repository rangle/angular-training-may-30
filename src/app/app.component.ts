import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [{
    title: 'Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quis error, a aliquid porro quia sint eaque laboriosam itaque perspiciatis officia sunt dicta, eius esse deleniti? Sapiente dolore, asperiores sint.',
    author: 'robin darnell',
    date: new Date(),
  }, {
    title: 'Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quis error, a aliquid porro quia sint eaque laboriosam itaque perspiciatis officia sunt dicta, eius esse deleniti? Sapiente dolore, asperiores sint.',
    author: 'robin darnell',
    date: new Date(),
  }, {
    title: 'Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quis error, a aliquid porro quia sint eaque laboriosam itaque perspiciatis officia sunt dicta, eius esse deleniti? Sapiente dolore, asperiores sint.',
    author: 'robin darnell',
    date: new Date(),
  }];

  constructor() {
  }
}
