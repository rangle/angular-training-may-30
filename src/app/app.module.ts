import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HeadingDirective } from './heading.directive';
import { TextDirective } from './text.directive';
import { LikeComponent } from './like/like.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ExcerptPipe } from './excerpt.pipe';
import { PostsService } from './posts/posts.service';
import { ApiService } from './api/api.service';

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
    HttpModule
  ],
  providers: [PostsService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
