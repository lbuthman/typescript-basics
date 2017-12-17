import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2> {{ title }} </h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img [src]="imageUrl"/>
    `
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://via.placeholder.com/350x150";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}