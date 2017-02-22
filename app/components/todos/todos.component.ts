import {Component} from 'angular2/core';
import {TodoService} from '../../services/todo.service';

@Component({
    selector: 'todos',
    template: `
                <div>
                    <div *ngIf="errorMsg">
                        <div class="alert alert-danger">{{errorMsg}}</div>                    
                    </div>
                    <div *ngIf="success">
                        <div class="alert alert-success">{{success}}</div>                    
                    </div>
                    
                    <div *ngIf="successClear">
                        <div class="alert alert-warning">{{successClear}}</div>                    
                    </div>
                    
                    <div *ngIf="delete">
                        <div class="alert alert-danger">{{delete}}</div>                    
                    </div>
                    
                    
                    <input type="text" 
                    class="form-control"  
                    [(ngModel)]="newTodo" 
                    (keyup.enter)="addTodo()"    
                    />    
                </div>
                <br />
                <ul class="list-group" *ngFor="#todo of todos">
                    <li class="list-group-item">{{todo}}
                       <a href="#" class="btn btn-danger pull-right" (click)="removeTodo(todo)">Delete</a>
                    </li> 
                </ul>
                <button class="btn btn-warning btn-lg" (click)="resetTodos()">Reset</button>
              `,
    providers: [TodoService]
})
export class TodosComponent {
  todos;
  newTodo;
  errorMsg;
  success;
  successClear;
  delete;

  constructor(private todoService: TodoService) {
      this.todos = todoService.getTodos();
  }

  addTodo() {
      if (!this.newTodo || this.newTodo.length < 3) {
        this.successClear = '';
        this.errorMsg = "Задача должна содержать не менее 3-х символов";
      } else {
          this.todoService.addTodo(this.newTodo.trim());
          this.errorMsg = '';
          this.successClear = '';
          this.delete = '';
          this.success = "Задача добавлена";
          this.newTodo = '';
      }

  }

  removeTodo(todo) {
      this.success = '';
      this.errorMsg = '';
      this.todoService.removeTodo(todo);
      this.delete = 'Задача удалена';
  }

  resetTodos() {
      this.success = '';
      this.errorMsg = '';
      this.delete = '';
      this.todoService.resetTodos();
      this.successClear = 'Список очищен';
  }
}
