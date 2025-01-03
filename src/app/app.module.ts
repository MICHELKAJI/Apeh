import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';


registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
})
export class AppModule { }