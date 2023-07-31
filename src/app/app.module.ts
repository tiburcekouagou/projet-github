import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumSearchComponent } from './album-search/album-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
