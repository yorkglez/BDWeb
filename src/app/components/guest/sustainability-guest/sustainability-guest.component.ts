import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state} from '@angular/animations'
@Component({
  selector: 'app-sustainability-guest',
  templateUrl: './sustainability-guest.component.html',
  styleUrls: ['./sustainability-guest.component.css'],
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
export class SustainabilityGuestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
