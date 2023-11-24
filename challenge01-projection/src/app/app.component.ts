import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CityCardComponent } from './component/city-card/city-card.component';
import { StudentCardComponent } from './component/student-card/student-card.component';
import { TeacherCardComponent } from './component/teacher-card/teacher-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TeacherCardComponent,
    StudentCardComponent,
    CityCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
