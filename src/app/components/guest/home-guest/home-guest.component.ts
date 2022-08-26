import { Component, Directive, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, style, transition, animate, state} from '@angular/animations'

@Component({
  selector: 'app-home-guest',
  templateUrl: './home-guest.component.html',
  styleUrls: ['./home-guest.component.css', '../../../../assets/css/homeStyles.css'],
  animations: [
    trigger('enterState',[
      state('void',style({
        opacity: 0
      })),
      transition(':enter',[
        animate('1s', style({
          opacity: 1
        }))
      ])
    ]),
    trigger('focusState',[
      state('void',style({
        opacity: 0,
        transform: 'translateY(30%)'
      })),
      transition(':enter',[
        animate('1s', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})



export class HomeGuestComponent implements OnInit
{
  public isStickyNav:Boolean = false
  public isShowMenu: boolean = false
  isShowLeading: boolean = false
  isShowLeadingBanner: boolean = false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll') onScroll()
  {
    // console.log(window.scrollY)
    if(window.innerWidth > 952)
    {

      if(window.scrollY >580)
      {
        this.isShowLeading = true
      }

      if(window.scrollY >= 50)
      {
        this.isStickyNav = true
      }
      else
      {
        this.isStickyNav = false
      }
    }
    this.isShowLeading = true

  }

  public showMenu():void
  {
    this.isShowMenu = !this.isShowMenu
  }

  public gotoCompanies():void
  {
    // alert()
    // this.router.navigate(['/'])
    // this.router.
    this.router.navigate(['/home'], { fragment: 'companies' })
    // this.router.navigateByUrl('home/#companies')/
  }

  public leadingEnter()
  {
    // this.isShowLeading = true
  }
  public animationLeadingDone()
  {
    this.isShowLeadingBanner = true
  }
}
