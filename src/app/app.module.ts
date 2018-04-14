import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InfoComponent } from '../app/click/info/info.component';

import { AgmCoreModule } from '@agm/core';
import { DataFinder } from './_models/dataFinder';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc8oU6R_KbPExRzmlVas9PHkqlU6j2GDo'
    }),
    HttpModule
  ],
  providers: [DataFinder],
  bootstrap: [AppComponent]
})
export class AppModule { }
