import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import { DividerModule } from "primeng/divider";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CascadeSelectModule } from "primeng/cascadeselect";


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
    RegistrationComponent

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
    CascadeSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
