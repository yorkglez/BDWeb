import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state} from '@angular/animations'
@Component({
  selector: 'app-home-berries',
  templateUrl: './home-berries.component.html',
  styleUrls: ['../../../../../assets/css/berries-homeStyles.css'],
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
export class HomeBerriesComponent implements OnInit {
  actualPage: string ='/berries'
  constructor() { }

  ngOnInit(): void {
  }

}
