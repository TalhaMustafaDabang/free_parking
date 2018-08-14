import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '../../../node_modules/angularfire2/database';
import { bookings } from '../models/bookings';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { DatabaseService } from './database.service';
import { nodemailer } from '../../../node_modules/nodemailer'
import { slotsWithTimingsAndStatus } from '../models/SWTAS';
import { Http,Headers } from '@angular/http';
import * as firebase from 'firebase';
import { element } from '../../../node_modules/@angular/core/src/render3/instructions';
import { user } from '../models/user';
import { AsyncPipe } from '../../../node_modules/@angular/common';
// import { HttpClient } from '../../../node_modules/@types/selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  user:user=new user();
  
  bookingToDelete: AngularFireObject<bookings>;
   bookingsRef: AngularFireList<bookings>;
   bookings:Observable<bookings[]>;
   deletingRef:AngularFireList<bookings>;
   deletings:Observable<bookings[]>;
   allBookingsRef: AngularFireList<bookings>;
   allBookings: Observable<bookings[]>;
  
  constructor(private http: Http,private dbs: DatabaseService, private afd: AngularFireDatabase) 
  {
    this.user = JSON.parse(localStorage.getItem('authState')).user;

    this.allBookingsRef=this.afd.list('allBookings/');
    this.allBookings=this.allBookingsRef.snapshotChanges().pipe(
      map(changes=> changes.map(
        c=>({key: c.payload.key,...c.payload.val(),})
      ))
    );

    this.bookingsRef=this.afd.list('bookings/');
    this.bookings=this.bookingsRef.snapshotChanges().pipe(
      map(changes=> changes.map(
        c=>({key: c.payload.key,...c.payload.val(),})
      ))
    );

  }

  makeBooking(booking: bookings)
{
 let date=booking.date.getDate().toString().concat("-").concat((Number(booking.date.getMonth()+1)).toString()).concat("-").concat(booking.date.getFullYear().toString());


  this.bookingsRef.set(booking.solotId+"/"+date+"/"+booking.hour.toString(),booking)
  .then(res=>{console.log("testing");alert("You Will Shortly Recive The Confirmation Email.");

let f=JSON.stringify(booking);
// firebase.database().ref('/users/'+booking.uid).orderByValue().on("value",(elemen)=>{this.user=elemen.val()});
let headers = new Headers();
  let obj={
    email: this.user.email,
    name: this.user.userName,
    slot: booking.solotId,
    hour: booking.hour,
    date: date,
    key:booking.key,
  }
  headers.append('Content-Type','application/json');
  headers.append('Access-Control-Allow-Origin','https://emerald-celsius.glitch.me');
  this.http.post('https://emerald-celsius.glitch.me/sendMail',{"email":this.user.email,"slot":booking.solotId,"hour":booking.hour,"key":booking.key,"date":booking.date},{headers: headers}).subscribe((e)=>{console.log(e.json())})

  



})
  .catch(err=>{alert("Sorry Booking Can Be Placed"+err)});


  this.allBookingsRef.set(this.user.uid+"/"+date+"/"+booking.key,booking);


}

bbu:AngularFireList<bookings[]>;
getBookingsOfUser()
{
   this.allBookingsRef.query.ref.child(this.user.uid).on("value",(e)=>{e.forEach(element=>{this.bbu=(element.val())})});
  }


cancelBooking(slotId:string,hour:string,uid:string,key:string)
{
  let book : bookings;
  let dateObject=new Date();
  let date=dateObject.getDate().toString().concat("-").concat(Number(dateObject.getMonth()+1).toString()).concat("-").concat(dateObject.getFullYear().toString());

  console.log("from bookings=>"+"/booings/"+slotId+"/"+date+"/"+hour);
  console.log("from allBookings=>"+"/allBookings/"+uid+"/"+date+"/"+key);
  
  this.bookingsRef.query.ref.child(slotId+"/"+date+"/"+hour).remove();
  this.allBookingsRef.query.ref.child(uid+"/"+date+"/"+key).remove();

}
}

