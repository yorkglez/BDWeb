import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state} from '@angular/animations'

@Component({
  selector: 'app-home-produce',
  templateUrl: './home-produce.component.html',
  styleUrls: ['../../../../../assets/css/produce-homeStyles.css'],
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
export class HomeProduceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
