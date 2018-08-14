import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../services/bookings.service';
import { Observable } from '../../../node_modules/rxjs';
import { bookings } from '../models/bookings';
import * as firebase from 'firebase';
import { element } from '../../../node_modules/protractor';
import { map } from 'rxjs/operators';
import { AngularFireList, AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { user } from '../models/user';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
bookings:Observable<bookings[]>;
allBookingsRef: AngularFireList<bookings>;
allBookings: Observable<bookings[]>;
currentUserUID:string;
d= new Date();
user: user;
 date=this.d.getDate().toString().concat("-").concat(Number(this.d.getMonth()+1).toString()).concat("-").concat(this.d.getFullYear().toString());


  constructor(private afd: AngularFireDatabase,private bookingsService: BookingsService) { 
    this.allBookingsRef=this.afd.list('allBookings/'+JSON.parse(localStorage.getItem('authState')).user.uid+"/"+this.date+"/");
    this.allBookings=this.allBookingsRef.snapshotChanges().pipe(
      map(changes=> changes.map(
        c=>({key: c.payload.key,...c.payload.val(),})
      ))
    );
  }

  ngOnInit() {
    this.user = new user();
    this.user=JSON.parse(localStorage.getItem('authState')).user;
    // firebase.database().ref('users/'+firebase.auth().currentUser.uid).on("value",(e)=>{this.user=e.val()});
 
  }


  cancelBooking(booking: bookings)
  {
     this.bookingsService.cancelBooking(booking.solotId,booking.hour,booking.uid,booking.key);
  }

}
