import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums: Album[] = ALBUMS
  _albumsList: any;

  constructor() { }

  getAlbums() {
    return this._albums.sort((a: Album, b: Album) => a.duration - b.duration)
  };


  getAlbum(id: string): Album | undefined {
    return this._albums.find(album => album.id === id)
  }

  getAlbumList(id: string): List | undefined {
    return this._albumsList.find(list => list.id === id)
  }

  count() {
    return this._albums.length
  }

  paginate(start: number, end: number): Album[] {
    return this.getAlbums().slice(start, end)
   }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }
}
=======
}
>>>>>>> ce6a0a420d9d6625ad70c652c8734460b404259e
=======
}
>>>>>>> ce6a0a420d9d6625ad70c652c8734460b404259e
=======
}
>>>>>>> feature/euloge
