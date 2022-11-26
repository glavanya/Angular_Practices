import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HideDirective }   from './hide.directive';
import { PdfViewerModule } from 'ng2-pdf-viewer';

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
import { Ex7Component } from './ex7/ex7.component';
import { Ex8Component } from './ex8/ex8.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ex9Component } from './ex9/ex9.component';
import { Ex10Component } from './ex10/ex10.component';
import { Ex10childComponent } from './ex10child/ex10child.component';
import { Ex11Component } from './ex11/ex11.component';
import { Ex12obsComponent } from './ex12obs/ex12obs.component';
import { Ex12obs1Component } from './ex12obs1/ex12obs1.component';
import { Ex12obs2Component } from './ex12obs2/ex12obs2.component';
import { Ex13httpComponent } from './ex13http/ex13http.component';
import { Ex14hideComponent } from './ex14hide/ex14hide.component';
import { Ex15pdfviewComponent } from './ex15pdfview/ex15pdfview.component';
import { Ex16pdfjsonComponent } from './ex16pdfjson/ex16pdfjson.component';
import { Ex16pdfjson1Component } from './ex16pdfjson1/ex16pdfjson1.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Ex17httpComponent } from './ex17http/ex17http.component';
import { Ex17http1Component } from './ex17http1/ex17http1.component';
import { Ex18queryparamsComponent } from './ex18queryparams/ex18queryparams.component';


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
    Ex6Component,
    Ex7Component,
    Ex8Component,
    Ex9Component,
    Ex10Component,
    Ex10childComponent,
    Ex11Component,
    Ex12obsComponent,
    Ex12obs1Component,
    Ex12obs2Component,
    Ex13httpComponent,
    Ex14hideComponent,
    HideDirective,
    Ex15pdfviewComponent,
    Ex16pdfjsonComponent,
    Ex16pdfjson1Component,
    Ex17httpComponent,
    Ex17http1Component,
    Ex18queryparamsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
