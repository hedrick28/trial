import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxMyLibComponent } from './nx-my-lib.component';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    NxMyLibComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    NxMyLibComponent
  ]
})
export class NxMyLibModule { }
