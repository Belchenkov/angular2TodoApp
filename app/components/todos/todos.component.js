System.register(['angular2/core', '../../services/todo.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1;
    var TodosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            TodosComponent = (function () {
                function TodosComponent(todoService) {
                    this.todoService = todoService;
                    this.todos = todoService.getTodos();
                }
                TodosComponent.prototype.addTodo = function () {
                    if (!this.newTodo || this.newTodo.length < 3) {
                        this.successClear = '';
                        this.errorMsg = "Задача должна содержать не менее 3-х символов";
                    }
                    else {
                        this.todoService.addTodo(this.newTodo.trim());
                        this.errorMsg = '';
                        this.successClear = '';
                        this.delete = '';
                        this.success = "Задача добавлена";
                        this.newTodo = '';
                    }
                };
                TodosComponent.prototype.removeTodo = function (todo) {
                    this.success = '';
                    this.errorMsg = '';
                    this.todoService.removeTodo(todo);
                    this.delete = 'Задача удалена';
                };
                TodosComponent.prototype.resetTodos = function () {
                    this.success = '';
                    this.errorMsg = '';
                    this.delete = '';
                    this.todoService.resetTodos();
                    this.successClear = 'Список очищен';
                };
                TodosComponent = __decorate([
                    core_1.Component({
                        selector: 'todos',
                        template: "\n                <div>\n                    <div *ngIf=\"errorMsg\">\n                        <div class=\"alert alert-danger\">{{errorMsg}}</div>                    \n                    </div>\n                    <div *ngIf=\"success\">\n                        <div class=\"alert alert-success\">{{success}}</div>                    \n                    </div>\n                    \n                    <div *ngIf=\"successClear\">\n                        <div class=\"alert alert-warning\">{{successClear}}</div>                    \n                    </div>\n                    \n                    <div *ngIf=\"delete\">\n                        <div class=\"alert alert-danger\">{{delete}}</div>                    \n                    </div>\n                    \n                    \n                    <input type=\"text\" \n                    class=\"form-control\"  \n                    [(ngModel)]=\"newTodo\" \n                    (keyup.enter)=\"addTodo()\"    \n                    />    \n                </div>\n                <br />\n                <ul class=\"list-group\" *ngFor=\"#todo of todos\">\n                    <li class=\"list-group-item\">{{todo}}\n                       <a href=\"#\" class=\"btn btn-danger pull-right\" (click)=\"removeTodo(todo)\">Delete</a>\n                    </li> \n                </ul>\n                <button class=\"btn btn-warning btn-lg\" (click)=\"resetTodos()\">Reset</button>\n              ",
                        providers: [todo_service_1.TodoService]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodosComponent);
                return TodosComponent;
            }());
            exports_1("TodosComponent", TodosComponent);
        }
    }
});
//# sourceMappingURL=todos.component.js.map