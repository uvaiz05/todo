import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component implements OnInit {
  title="todo";
  todos=['todo1',
         'todo2',
         'todo3']

  constructor() { }

  ngOnInit() {
  }


}
