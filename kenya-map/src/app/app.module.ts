import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {SlMapModule } from './sl-map/sl-map.module'
import { AppComponent } from './app.component'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule , SlMapModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
