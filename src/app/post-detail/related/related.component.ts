import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent implements OnInit {

  @select(['ui', 'activePostId']) activePostId$;

  constructor() { }

  ngOnInit() {
  }

}
