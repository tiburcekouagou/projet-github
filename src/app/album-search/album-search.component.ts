import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AlbumService } from '../album.service';
import { Album } from '../album';

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.css']
})
export class AlbumSearchComponent {
word!: string;
@Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter()

  constructor(
    private albumService: AlbumService,
  ) { }

 // ngOnInit() {}

  onSubmit(form: NgForm): void {
     // récupération d'une valeur spécifique
     let results: Album[] = this.albumService.search(form.value.word)
     this.searchAlbums.emit(results)
    console.log(form.value['word']);
    }

    onChangeEmite($enent: string){
      let results: Album [] = this.albumService.search($event);
      this.searchAlbums.emit(results)
    }
 




}
