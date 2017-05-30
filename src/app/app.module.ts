import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { TextComponent } from './text/text.component';
import { HeadingDirective } from './heading.directive';
import { TextDirective } from './text.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TextComponent,
    HeadingDirective,
    TextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
