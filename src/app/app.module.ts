import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import {NgxPhotoEditorModule} from "ngx-photo-editor";

import {NgxSimpleTextEditorModule} from 'ngx-simple-text-editor';

import { NO_ERRORS_SCHEMA } from '@angular/core';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    RoutingComponent
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
  schemas:[NO_ERRORS_SCHEMA]
  
})
export class AppModule { }
