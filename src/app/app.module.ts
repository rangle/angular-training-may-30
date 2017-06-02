import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HeadingDirective } from './heading.directive';
import { TextDirective } from './text.directive';
import { LikeComponent } from './like/like.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ExcerptPipe } from './excerpt.pipe';
import { ApiService } from './api/api.service';
import {
  PostsActions,
  PostsService,
  PostsSelector,
} from './posts';
import { UiActions } from './ui';
import { routeConfig } from './app.routes';
import {
  PostDetailComponent,
  CommentsComponent,
  RelatedComponent,
} from './post-detail';
import { StoreModule, IAppState } from './store/store.module';
import { PollingModule } from './polling';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeadingDirective,
    TextDirective,
    LikeComponent,
    PostsListComponent,
    SearchbarComponent,
    ExcerptPipe,
    PostDetailComponent,
    CommentsComponent,
    RelatedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule.forRoot(routeConfig),
    PollingModule,
    StoreModule,
  ],
  providers: [
    PostsService,
    ApiService,
    PostsActions,
    PostsSelector,
    UiActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
