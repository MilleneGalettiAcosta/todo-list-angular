import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/itodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Itodo[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(title: string) {
    console.log(title);
  }
}
