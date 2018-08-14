import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { AuthenticationService } from './authentication.service';
import { Router } from '../../../node_modules/@angular/router';
import { feedback } from '../models/feedback';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '../../../node_modules/angularfire2/database';
import { parkingarea } from '../models/parking-area';
import { Observable } from '../../../node_modules/rxjs';
import { user } from '../models/user';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  parkingAreaOneRef:AngularFireList<parkingarea>;
  parkingsOne:Observable<parkingarea[]>;
  parkingAreaTwoRef:AngularFireList<parkingarea>;
  parkingsTwo:Observable<parkingarea[]>;
  parkingAreaThreeRef:AngularFireList<parkingarea>;
  parkingsThree:Observable<parkingarea[]>;
  bookingsRef:AngularFireList<parkingarea>;
  bookings:Observable<parkingarea[]>;
  usersRef:AngularFireList<user>;
  users:Observable<user[]>;
  user : user = new user();
 
  constructor(private afd: AngularFireDatabase,private auth:AuthenticationService, private router: Router)
  {

    this.user = JSON.parse(localStorage.getItem('authState')).user;
    
    this.usersRef=afd.list('users/');
    this.users=this.usersRef.snapshotChanges().pipe(
      map(changes=> changes.map(
      c=>({key: c.payload.key,...c.payload.val(),})
    )));
    

    this.bookingsRef=afd.list('bookings/');
    this.bookings=this.bookingsRef.snapshotChanges().pipe(
      map(changes=> changes.map(
      c=>({key: c.payload.key,...c.payload.val(),})
    )));

    this.parkingAreaOneRef=afd.list('parking-areas/parking-area-1');
    this.parkingsOne=this.parkingAreaOneRef.snapshotChanges().pipe(
      map(changes=> changes.map(
      c=>({key: c.payload.key,...c.payload.val(),})
    )));

    this.parkingAreaTwoRef=afd.list('parking-areas/parking-area-2');
    this.parkingsTwo=this.parkingAreaTwoRef.snapshotChanges().pipe(
      map(changes=> changes.map(
      c=>({key: c.payload.key,...c.payload.val(),})
    )));

    this.parkingAreaThreeRef=afd.list('parking-areas/parking-area-3');
    this.parkingsThree=this.parkingAreaThreeRef.snapshotChanges().pipe(
      map(changes=> changes.map(
      c=>({key: c.payload.key,...c.payload.val(),})
    )));
  }


getUsersList()
{
  return this.users;
}

getUserDetails()
{ 

  return firebase.database().ref('users/'+this.user.uid).orderByValue();
  // return u
}

deleteBooking(parking_area_name:string,slot:string,hour: string)
{
  this.bookingsRef=this.afd.list('bookings/');
  this.bookings=this.bookingsRef.snapshotChanges().pipe(
    map(changes=> changes.map(
    c=>({key: c.payload.key,...c.payload.val(),})
  )));
}


makeUser(user:user)
{
  this.usersRef.set(user.uid,user)
 
}







}
