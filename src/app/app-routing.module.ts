import { HomeBerriesComponent } from './components/guest/berries/home-berries/home-berries.component';
import { HomeProduceComponent } from './components/guest/produce/home-produce/home-produce.component';
import { NavbarComponent } from './components/guest/shared/navbar/navbar.component';
import { NurseryProductsComponent } from './components/guest/nursery/nursery-products/nursery-products.component';
import { WelcomeGuestComponent } from './components/guest/welcome-guest/welcome-guest.component';
import { NurseryHomeGuestComponent } from './components/guest/nursery/nursery-home-guest/nursery-home-guest.component';
import { ContactGuestComponent } from './components/guest/contact-guest/contact-guest.component';
import { SustainabilityGuestComponent } from './components/guest/sustainability-guest/sustainability-guest.component';
import { AboutusGuestComponent } from './components/guest/aboutus-guest/aboutus-guest.component';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeGuestComponent } from './components/guest/home-guest/home-guest.component';
import { ClonalProcessComponent } from './components/guest/nursery/clonal-process/clonal-process.component';
import { HomeGeneticsComponent } from './components/guest/genetics/home-genetics/home-genetics.component';


//*Guest components
const routes: Routes = [
  {component: WelcomeGuestComponent, path: ''},
  {component: HomeGuestComponent, path: 'home'},
  {component: AboutusGuestComponent, path: 'aboutus'},
  {component: SustainabilityGuestComponent, path: 'sustainability'},
  {component: ContactGuestComponent, path: 'contactus'},
  {component: NurseryHomeGuestComponent, path: 'nursery'},
  {component: ClonalProcessComponent, path: 'nursery/clonal'},
  {component: NurseryProductsComponent, path: 'nursery/products'},
  {component: HomeGeneticsComponent, path: 'genetics'},
  {component: HomeProduceComponent, path: 'produce'},
  {component: HomeBerriesComponent, path: 'berries'},
];
const routerOptions: ExtraOptions =
{
  // useHash: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  // enableTracing: true,
  onSameUrlNavigation: "reload",
}

@NgModule({
  // declarations:[NavbarComponent],
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export class TaskModule{}