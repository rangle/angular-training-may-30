import { Injectable } from '@angular/core';
import { select } from '@angular-redux/store';

@Injectable()
export class PostsSelector {
  @select(['posts', 'all']) posts$;
}
