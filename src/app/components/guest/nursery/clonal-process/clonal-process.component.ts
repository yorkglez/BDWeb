import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state} from '@angular/animations'

@Component({
  selector: 'app-clonal-process',
  templateUrl: './clonal-process.component.html',
  styleUrls: ['../../../../../assets/css/nursery-clonalprocess.css'],
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
export class ClonalProcessComponent implements OnInit {
  actualPage: string ='nursery/clonal'
  constructor() { }

  ngOnInit(): void {
  }

}
