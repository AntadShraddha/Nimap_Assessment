import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import {NgxPhotoEditorModule} from "ngx-photo-editor";

import {NgxSimpleTextEditorModule} from 'ngx-simple-text-editor';

import { NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    ProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPhotoEditorModule,
    NgxSimpleTextEditorModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
