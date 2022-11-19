import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex2inputComponent } from './ex2input/ex2input.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex3outputComponent } from './ex3output/ex3output.component';
import { Ex4Component } from './ex4/ex4.component';
import { Ex4outputComponent } from './ex4output/ex4output.component';
import { Ex5Component } from './ex5/ex5.component';
import { Ex6Component } from './ex6/ex6.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    Ex2Component,
    Ex2inputComponent,
    Ex3Component,
    Ex3outputComponent,
    Ex4Component,
    Ex4outputComponent,
    Ex5Component,
    Ex6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
