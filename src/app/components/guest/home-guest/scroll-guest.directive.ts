import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollGuest]'
})
export class ScrollGuestDirective {

  constructor() { }
  // @HostBinding('class.nav-sticky') isStickyNav:boolean = false
  // // @HostBinding('class.nav-header') isStickyNav:boolean = false
  // @HostListener('window:scroll') onScroll()
  // {
  //   console.log(window.scrollY)
  //   if(window.scrollY >= 50)
  //   {
  //     this.isStickyNav = true
  //   }
  //   else
  //   {
  //     this.isStickyNav = false
  //   }
  // }
}
