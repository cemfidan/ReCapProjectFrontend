import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/entity/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos : ToDo[] = [];
  isDataLoaded = false;
  
  constructor(private todoService:TodoService){}
  
  ngOnInit(): void {
    this.getToDos();
  }

  getToDos(){
    return this.todoService.getToDos().subscribe(response=>{
      this.todos = response.data;
      this.isDataLoaded = true;
    });
  }

}
