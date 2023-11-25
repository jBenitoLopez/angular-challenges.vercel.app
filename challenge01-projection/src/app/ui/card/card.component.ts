import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { randStudent, randTeacher } from '../../data-access/fake-http.service';
// import { StudentStore } from '../../data-access/student.store';
// import { TeacherStore } from '../../data-access/teacher.store';
// import { CardType } from '../../model/card.model';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  // imports: [NgIf, NgFor, ListItemComponent],
  imports: [NgFor, ListItemComponent],
  styles: [
    `
      .bg-light-red {
        background-color: rgba(250, 0, 0, 0.1);
      }

      .bg-light-green {
        background-color: rgba(0, 250, 0, 0.1);
      }
    `,
  ],
})
export class CardComponent {
  @Input() list: any[] | null = null;
  @Input() customClass = '';
  @Output() clickNewItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  add() {
    console.log('add');
  }
  // addNewItem() {
  //   if (this.type === CardType.TEACHER) {
  //     this.teacherStore.addOne(randTeacher());
  //   } else if (this.type === CardType.STUDENT) {
  //     this.studentStore.addOne(randStudent());
  //   }
  // }
}
