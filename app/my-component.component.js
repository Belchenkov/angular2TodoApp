System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var MyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponent = (function () {
                function MyComponent() {
                    this.name = 'John Doe';
                    this.imageUrl = 'http://lorempixel.com/400/200';
                    this.isActive = true;
                }
                MyComponent.prototype.changeMessage = function () {
                    this.clickMessage = 'Hello World';
                };
                MyComponent.prototype.setUpperCase = function (e) {
                    this.name = e.to;
                };
                MyComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "<h1>Hello, {{name}}</h1>\n                <br />\n                <button (click)=\"changeMessage()\">Button</button>\n                <h1>{{clickMessage}}</h1>\n                <input (ngModelChange)=\"setUpperCase($event)\" [(ngModel)]=\"name\"/>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponent);
                return MyComponent;
            }());
            exports_1("MyComponent", MyComponent);
        }
    }
});
//# sourceMappingURL=my-component.component.js.map