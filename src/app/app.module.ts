import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouteReuseStrategy, RouterModule} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {OtherComponent} from "./other.component";
import {HttpClientModule} from "@angular/common/http";

const routes: Route[] = [
  {
    path: 'other',
    component: OtherComponent
  }
]

@NgModule({
  declarations: [AppComponent, OtherComponent],
  imports: [BrowserModule,
    IonicModule.forRoot({mode: "ios"}),
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
