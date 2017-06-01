import { Injectable } from '@angular/core';
import { select, select$ } from '@angular-redux/store';


const selectQueryAndPosts = store => ({
  posts: store.posts.all,
  query: store.ui.query,
});

const filterPosts = ({ posts, query }) =>
  posts.filter(post =>
    post.title.toLowerCase().includes(
      query.toLowerCase()
    ));

const getFilteredPosts = queryAndPosts$ =>
  queryAndPosts$.map(filterPosts);

@Injectable()
export class PostsSelector {
  @select$(selectQueryAndPosts, getFilteredPosts)
  readonly filteredPosts$;

  @select(['posts', 'all'])
  readonly posts$;
}
