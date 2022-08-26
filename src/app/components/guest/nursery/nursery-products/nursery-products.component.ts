import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state} from '@angular/animations'

@Component({
  selector: 'app-nursery-products',
  templateUrl: './nursery-products.component.html',
  styleUrls: ['../../../../../assets/css/nurseryproductsStyles.css'],
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

export class NurseryProductsComponent implements OnInit {
  actualPage: string ='nursery/products'
  constructor() { }

  ngOnInit(): void {
  }

}
