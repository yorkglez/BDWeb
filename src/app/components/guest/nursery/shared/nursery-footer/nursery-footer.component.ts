import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';
import { Email } from 'src/app/models/Email'
@Component({
  selector: 'app-nursery-footer',
  templateUrl: './nursery-footer.component.html',
  styleUrls: ['../../../../../../assets/css/nursery-footerStyles.css']
})
export class NurseryFooterComponent implements OnInit 
{
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
