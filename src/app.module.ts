import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/components/app/app.component';
import { UserComponent } from './app/components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './app/components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
