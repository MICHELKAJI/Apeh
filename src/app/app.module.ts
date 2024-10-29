import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, AppComponent, FormsModule],
  declarations: [],
 providers: [ HttpClient, provideHttpClient()] // add it here
})
export class AppModule { }