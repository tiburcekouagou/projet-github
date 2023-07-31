import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AlbumsComponent } from './albums/albums.component';
=======
import { AlbumDetailsComponent } from './album-details/album-details.component';
>>>>>>> ac2dd8dec99874eab1174b27e4cd4539b02928a2

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AlbumsComponent
=======
    AlbumDetailsComponent
>>>>>>> ac2dd8dec99874eab1174b27e4cd4539b02928a2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
