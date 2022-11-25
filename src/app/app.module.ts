import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import { DividerModule } from "primeng/divider";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { NgbCollapse, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {ToastModule} from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CanzoniComponent } from './components/canzoni/canzoni.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardCanzoniComponent } from './shared/card-canzoni/card-canzoni.component';
import { CanzoniListComponent } from './components/canzoni/canzoni-list/canzoni-list.component';
import { TestoComponent } from './components/canzoni/testo/testo.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RegistrationComponent } from './components/users/registration/registration.component';



import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import {TableModule} from 'primeng/table';

import { NuovaCanzoneComponent } from './components/canzoni/nuova-canzone/nuova-canzone.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfiloComponent } from './components/users/profilo/profilo.component';
import * as moment from 'moment';
import { RisultatoComponent } from './components/canzoni/risultato/risultato.component';
import { AutoriComponent } from './components/autori/autori.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CanzoniComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardCanzoniComponent,
    CanzoniListComponent,
    TestoComponent,
    CategoriaComponent,
    RegistrationComponent,
    NuovaCanzoneComponent,
    LoginComponent,
    ProfiloComponent,
    RisultatoComponent,
    AutoriComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    BrowserAnimationsModule,
    DropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    NgbCollapseModule,
    HttpClientModule,
    ToastModule,
    PaginatorModule,
    CKEditorModule,
    TableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
