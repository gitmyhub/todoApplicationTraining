import { Component, OnInit } from '@angular/core';
import { TodoErrorType } from 'src/model/todoErrorType';

export class Todo {
  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {

  }
}
@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.scss']
})
export class ListtodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn to code', false, new Date()),
    new Todo(2, 'Learn Angular', false, new Date()),
    new Todo(3, 'Learn to work', false, new Date()),
  ];

  constructor() {
  }

  ngOnInit() {

  }

}
