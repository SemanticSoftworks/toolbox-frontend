/**
 * Created by Santos on 2017-02-14.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SearchComponent} from "./search.component";

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class SearchModule { }
