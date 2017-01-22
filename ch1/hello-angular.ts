/**
 * Created by xiye on 1/21/17.
 */
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hello-angular',
    template: '<h1> {{greeting}} </h1>'
})
class HelloAngularComponent {
    greeting: string;
    constructor() {
        this.greeting = 'Hello Angular 2!';
    }
}