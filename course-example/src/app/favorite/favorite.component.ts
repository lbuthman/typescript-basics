import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isFavorited = false;

  constructor() { }

  ngOnInit() {
  }

  onFavoriteClick() {
    this.isFavorited = !this.isFavorited;
  }

}
