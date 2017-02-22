export class TodoService {
    todos = ['Подъем в 6:00', 'Завтрак', 'Погулять с собакой', 'Принять душ'];

    getTodos() {
        return this.todos;
    }

    addTodo(newTodo) {
        this.todos.push(newTodo);
    }

    removeTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo) , 1);
    }

    resetTodos() {
        this.todos.length = 0;
    }

}