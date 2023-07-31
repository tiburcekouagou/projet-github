import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlbumSearchComponent } from './album-search/album-search.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumSearchComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    LoginComponent,
    AlbumDescriptionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
