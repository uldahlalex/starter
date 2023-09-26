import { Component } from '@angular/core';
import {Service} from "./service";

@Component({
  selector: 'app-root',
  template: `
    <ion-toolbar><ion-title>welcome to the starter app</ion-title></ion-toolbar>
    <p>Below you will see variable content depending on the route:</p>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor() {}
}
