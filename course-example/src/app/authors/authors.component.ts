import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  colSpan = 2;
  isPrimary = true;
  email = 'placeholder@example.com';

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

  onClick($event) {
    alert("I was clicked! " + event.isTrusted);
  }

  onKeyUp() {
    alert("You typed " + this.email);
  }

}
