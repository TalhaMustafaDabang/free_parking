import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: Http) { }

  sendBookingConfirmationEmail(email:string,message:string)
  {
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  headers.append('Access-Control-Allow-Origin','https://emerald-celsius.glitch.me');
  this.http.post('https://emerald-celsius.glitch.me/reviewEmail',{"email":email,"message":message},{headers: headers}).subscribe((e)=>{alert(e.json())})

  
  }


}
