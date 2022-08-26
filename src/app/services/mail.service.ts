import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from 'src/app/models/Email'

@Injectable({
  providedIn: 'root'
})
export class MailService 
{
  private URI:string = 'http://ec2-3-18-146-182.us-east-2.compute.amazonaws.com:3000/sendmail/'
  // private URI:string = 'http://localhost:3000/sendmail/'
  private headers = new HttpHeaders({'Content-Type': 'text/plain'})
  constructor(private http: HttpClient) { }

  public sendContactMail(email: Email):Observable<Email>
  {
    return this.http.post<Email>(`${this.URI}contact`,email)
  }
  public sendContactMailVist(email: Email):Observable<Email>
  {
    return this.http.post<Email>(`${this.URI}vist`,email)
  }
  public sendContactMailEvent(email: Email):Observable<any>
  {
    return this.http.post<any>(`${this.URI}events`,email)
  }

}
