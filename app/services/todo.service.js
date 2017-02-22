System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoService;
    return {
        setters:[],
        execute: function() {
            TodoService = (function () {
                function TodoService() {
                    this.todos = ['Подъем в 6:00', 'Завтрак', 'Погулять с собакой', 'Принять душ'];
                }
                TodoService.prototype.getTodos = function () {
                    return this.todos;
                };
                TodoService.prototype.addTodo = function (newTodo) {
                    this.todos.push(newTodo);
                };
                TodoService.prototype.removeTodo = function (todo) {
                    this.todos.splice(this.todos.indexOf(todo), 1);
                };
                TodoService.prototype.resetTodos = function () {
                    this.todos.length = 0;
                };
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todo.service.js.map