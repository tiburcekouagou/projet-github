import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit{
  @Output() setPage: EventEmitter<{start: number, end: number}> = new EventEmitter();
  currentPage:number = 1;
  numberPages: number = 0;
  perPage: number = 0;
  total: number = 0;
  ngOnInit(): void {
    this.perPage = 0;
    this.numberPages = Math.ceil(this.total / this.perPage);
  }
  next(){
    if (this.currentPage < this.numberPages) {
      this.currentPage++
      this.setPage.emit(this.setPageAlbums(this.currentPage));
    }
   }
  prev(){
    if (this.currentPage > 1 ) {
      this.currentPage--;
      this.setPage.emit(this.setPageAlbums(this.currentPage));
    }
   }
  byNumber(page: number){
      this.currentPage = page
      this.setPage.emit(this.setPageAlbums(this.currentPage));
   }
   setPageAlbums(page: number): {start: number, end: number} {
    let start = (page - 1) * this.perPage;
    let end = start + this.perPage;
    return {start, end};
   }
}
