import { Course } from './../model/course';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

courses: Course[] = [
  { _id: "1", name: "angular", category: "crud"}
];
displayedColumns = ['name','category'];

}
