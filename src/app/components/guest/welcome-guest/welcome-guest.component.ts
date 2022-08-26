import { Component, OnInit, NgModule, Input, HostListener } from '@angular/core';
import { trigger, style, transition, animate, state} from '@angular/animations'
// import AOS from 'aos'
@Component({
  selector: 'app-welcome-guest',
  templateUrl: './welcome-guest.component.html',
  styleUrls: ['./welcome-guest.component.css'],
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
    trigger('enterSecondState',[
      state('void',style({
        opacity: 0
      })),
      transition(':enter',[
        animate(300, style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class WelcomeGuestComponent implements OnInit {
  @Input() show:boolean = true;
  isShow: boolean = false
  // @HostListener('document:click')
  constructor() { }

  ngOnInit(): void 
  {
    
  }
  animationDone($event: any)
  {
    this.isShow = true
  }
}
