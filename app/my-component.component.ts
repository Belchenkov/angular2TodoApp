import {Component} from 'angular2/core';

@Component({
    selector: 'my-component',
    template: `<h1>Hello, {{name}}</h1>
                <br />
                <button (click)="changeMessage()">Button</button>
                <h1>{{clickMessage}}</h1>
                <input (ngModelChange)="setUpperCase($event)" [(ngModel)]="name"/>
                `
})

export class MyComponent {
    name;
    imageUrl;
    isActive;
    clickMessage;

    constructor() {
        this.name = 'John Doe';
        this.imageUrl = 'http://lorempixel.com/400/200';
        this.isActive = true;
    }

    changeMessage() {
        this.clickMessage = 'Hello World';
    }

    setUpperCase(e) {
        this.name = e.to;
    }
}
