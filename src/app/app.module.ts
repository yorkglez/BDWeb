import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeGuestComponent } from './components/guest/home-guest/home-guest.component';
import { AboutusGuestComponent } from './components/guest/aboutus-guest/aboutus-guest.component';
import { ContactGuestComponent } from './components/guest/contact-guest/contact-guest.component';
import { NavbarComponent } from './components/guest/shared/navbar/navbar.component';
import { SustainabilityGuestComponent } from './components/guest/sustainability-guest/sustainability-guest.component';
import { FooterGuestComponent } from './components/guest/shared/footer-guest/footer-guest.component';
import { FootermoreGuestComponent } from './components/guest/shared/footermore-guest/footermore-guest.component';
import { ScrollGuestDirective } from './components/guest/home-guest/scroll-guest.directive';
import { NurseryHomeGuestComponent } from './components/guest/nursery/nursery-home-guest/nursery-home-guest.component';
import { NurseryProductsGuestComponent } from './components/guest/nursery/nursery-products-guest/nursery-products-guest.component';
import { NurseryClonalProcessGuestComponent } from './components/guest/nursery/nursery-clonal-process-guest/nursery-clonal-process-guest.component';
import { NavNurseryGuestComponent } from './components/guest/shared/nav-nursery-guest/nav-nursery-guest.component';
import { WelcomeGuestComponent } from './components/guest/welcome-guest/welcome-guest.component';
import { NavbarNurseryComponent } from './components/guest/nursery/shared/navbar-nursery/navbar-nursery.component';
import { ClonalProcessComponent } from './components/guest/nursery/clonal-process/clonal-process.component';
import { NurseryProductsComponent } from './components/guest/nursery/nursery-products/nursery-products.component';
import { NurseryFooterComponent } from './components/guest/nursery/shared/nursery-footer/nursery-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeGeneticsComponent } from './components/guest/genetics/home-genetics/home-genetics.component';
import { CommonModule } from '@angular/common';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HomeProduceComponent } from './components/guest/produce/home-produce/home-produce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarGeneticsComponent } from './components/guest/genetics/shared/navbar-genetics/navbar-genetics.component';
import { HomeBerriesComponent } from './components/guest/berries/home-berries/home-berries.component';
import { NavBerriesComponent } from './components/guest/berries/nav-berries/nav-berries.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    HomeGuestComponent,
    AboutusGuestComponent,
    ContactGuestComponent,
    NavbarComponent,
    SustainabilityGuestComponent,
    FooterGuestComponent,
    FootermoreGuestComponent,
    ScrollGuestDirective,
    NurseryHomeGuestComponent,
    NurseryProductsGuestComponent,
    NurseryClonalProcessGuestComponent,
    NavNurseryGuestComponent,
    WelcomeGuestComponent,
    NavbarNurseryComponent,
    ClonalProcessComponent,
    NurseryProductsComponent,
    NurseryFooterComponent,
    HomeGeneticsComponent,
    HomeProduceComponent,
    NavbarGeneticsComponent,
    HomeBerriesComponent,
    NavBerriesComponent,
    // CarouselHolderComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    CarouselModule 
    // NavbarComponent
  ],
  exports: [IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
