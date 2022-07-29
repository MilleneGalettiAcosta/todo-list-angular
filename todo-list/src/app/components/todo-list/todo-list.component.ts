import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/itodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: ITodo[] = [];
  
  constructor() { }

  ngOnInit(): void {
    let item:any = localStorage.getItem('todos')
    let todos = JSON.parse(item);
    if (!todos) {
      this.todos = [];
    } else {
      this.todos = todos;
    }
  }

  addTodo(title: string) {
    const id = this.todos.length +1;
    this.todos.push({
      id: id,
      title: title,
      done: false,
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(todo: any) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}