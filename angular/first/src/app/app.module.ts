import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {SidebarModule} from 'primeng/sidebar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ButtonModule} from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NextpageComponent } from './nextpage/nextpage.component';
import { HttpClientModule } from "@angular/common/http";
import { RamlService } from "./raml.service";




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    NextpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    DynamicDialogModule,
    DialogModule,
    RouterModule,
    HttpClientModule,
    SidebarModule, BsDropdownModule.forRoot()
 
   
  ],
  providers: [RamlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
