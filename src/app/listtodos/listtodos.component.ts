import { Component, OnInit } from '@angular/core';
import { TodoErrorType } from 'src/model/todoErrorType';

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.scss']
})
export class ListtodosComponent implements OnInit {
  todos = [
    { id: 1, description: 'Learn to code'},
    { id: 2, description: 'Learn to play'},
    { id: 3, description: 'Learn to work'}
  ];

  constructor() {
  }

  ngOnInit() {

  }

}
