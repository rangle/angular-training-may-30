import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HeadingDirective } from './heading.directive';
import { TextDirective } from './text.directive';
import { LikeComponent } from './like/like.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ExcerptPipe } from './excerpt.pipe';
import { ApiService } from './api/api.service';
import { store, IAppState } from './store';
import {
  PostsActions,
  PostsService,
} from './posts';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeadingDirective,
    TextDirective,
    LikeComponent,
    PostsListComponent,
    SearchbarComponent,
    ExcerptPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [PostsService, ApiService, PostsActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
