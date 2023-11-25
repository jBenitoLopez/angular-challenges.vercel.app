import { Component, Input, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { randTeacher } from '../../data-access/fake-http.service';
// import { CardType } from '../../model/card.model';
import { Teacher } from '../../model/teacher.model';

import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-teacher-card',
  template: `<app-card
    [list]="teachers"
    customClass="bg-light-red"
    (clickNewItem)="addNewItem()"
  >
    <img src="assets/img/teacher.png" width="200px" />
  </app-card>`,

  standalone: true,
  imports: [CardComponent],
})
export class TeacherCardComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(private http: FakeHttpService, private store: TeacherStore) { }

  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));

    this.store.teachers$.subscribe((t) => (this.teachers = t));
  }

  addNewItem() {
    this.store.addOne(randTeacher());
  }
}
