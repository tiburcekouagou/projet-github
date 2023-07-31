import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
 import { AlbumDetailsComponent } from './album-details/album-details.component';


import { AlbumsComponent } from './albums/albums.component';

 import { LoginComponent } from './login/login.component';
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
