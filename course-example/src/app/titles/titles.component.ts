import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
  }
}
