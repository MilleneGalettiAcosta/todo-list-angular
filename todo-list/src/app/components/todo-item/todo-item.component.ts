import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/models/itodo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // componente filho
  @Input() todo: ITodo = {
    id: 0,
    title: '',
    done: false,
  };

  @Output() remove = new EventEmitter();

  done = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  removeTodo(): void {
    this.remove.emit(this.todo);
  }

  markAsDone(): void {
    this.done = true;
  }
}
