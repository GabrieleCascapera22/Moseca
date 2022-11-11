import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    TestoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
