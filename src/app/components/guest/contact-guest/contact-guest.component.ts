import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators  } from '@angular/forms'
import { MailService } from 'src/app/services/mail.service'
import { Email } from 'src/app/models/Email'
import { trigger, style, transition, animate, state} from '@angular/animations'

@Component({
  selector: 'app-contact-guest',
  templateUrl: './contact-guest.component.html',
  styleUrls: ['./contact-guest.component.css'],
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
export class ContactGuestComponent implements OnInit {
  formEmail: FormGroup
  isEmailSend: Boolean = false
  email: Email
  constructor( private formBuilder: FormBuilder, private _mailService: MailService) { }

  ngOnInit(): void 
  {
    this.initializeForm()
  }
  public sendMail(form: FormGroup):void
  {
    this.email = this.formEmail.value
    this.email.subject = 'Cuentanos'
    this._mailService.sendContactMail(this.email).subscribe( res =>
      {
        this.formEmail.reset()
        this.isEmailSend = true
      }, 
      err =>
      {
        this.formEmail.reset()
        this.isEmailSend = true
      })
  }

  public initializeForm():void
  {
    this.formEmail = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],     
      name: ['', Validators.required],     
      message: ['', [Validators.required]],
    })
  }
}
