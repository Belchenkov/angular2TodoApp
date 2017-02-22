import {Component} from 'angular2/core';
import {TodosComponent} from '../todos/todos.component';

@Component({
    selector: 'my-app',
    template: `
              <h1 class="text-center">Add your task</h1>
              <todos></todos>
                `,
    directives: [TodosComponent]


})
export class AppComponent { }
