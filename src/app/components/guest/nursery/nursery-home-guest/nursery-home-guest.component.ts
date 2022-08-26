import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';
import { Email } from 'src/app/models/Email'
import { trigger, style, transition, animate, state} from '@angular/animations'

@Component({
  selector: 'app-nursery-home-guest',
  templateUrl: './nursery-home-guest.component.html',
  styleUrls: ['./nursery-home-guest.component.css','../../../../../assets/css/nurseryhomeStyles.css'],
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
export class NurseryHomeGuestComponent implements OnInit {
  actualPage: string ='nursery'
  formEmailVistus: FormGroup
  formEmailUpComing: FormGroup
  isEmailSend: Boolean = false
  isEmailVistSend: Boolean = false
  isEmailUpcomingSend: Boolean = false
  email: Email
  
  constructor( private formBuilder: FormBuilder, private _mailService: MailService) { }
  
  ngOnInit(): void 
  {
    this.initializeFormVistus()
    this.initializeFormUpComing()
  }

  public sendMailVistus(form: FormGroup):void
  {
    this.email = this.formEmailVistus.value
    this.email.subject = 'Visita'
    //! console.log(this.formEmailVistus.invalid)
    //! this.formEmailVistus.reset()
    if(!this.formEmailVistus.invalid)
    {
      this._mailService.sendContactMailVist(this.email).subscribe( res =>
        {
          this.formEmailVistus.reset()
          this.isEmailVistSend = true
        }, 
        err =>
        {
          this.formEmailVistus.reset()
          this.isEmailVistSend = true
        })
    }   
  }
  public sendMailUpcoming(form: FormGroup):void
  {
    this.email = this.formEmailUpComing.value
    this.email.subject = 'Eventos'
 
    this._mailService.sendContactMailEvent(this.email).subscribe( res =>
      {
        this.formEmailUpComing.reset()
        this.isEmailUpcomingSend = true
        // console.log()
      }, 
      err =>
      {
        this.formEmailUpComing.reset()
        this.isEmailUpcomingSend = true
      })
  }

  public initializeFormVistus():void
  {
    this.formEmailVistus = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],     
      name: ['', Validators.required],     
      // message: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      where: ['', [Validators.required]],
      dateVist: ['', [Validators.required]],
      plant: ['', [Validators.required]],
    })
  }
  public initializeFormUpComing():void
  {
    this.formEmailUpComing = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]]
    })
  }

}
