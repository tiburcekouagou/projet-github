import { Component,OnInit } from '@angular/core';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css']
})
export class AlbumDescriptionComponent implements OnInit {
  album: Album | undefined
  constructor(
    private route : ActivatedRoute,
    private aS : AlbumService
  ){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    const id = this.route.snapshot.params['albumId']

    this.album = this.aS.getAlbum(id)
    
  }

}
