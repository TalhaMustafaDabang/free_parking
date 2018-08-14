import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '../../../../node_modules/angularfire2/database';
import { parkingarea } from '../../models/parking-area';
import { Observable } from '../../../../node_modules/rxjs';
import { AngularFirestoreDocument } from '../../../../node_modules/angularfire2/firestore';
import { map } from 'rxjs/operators';
import { DatabaseService } from '../../services/database.service';
import { bookings } from '../../models/bookings';
import { ModelsService } from '../../services/models.service';
import { BookingsService } from '../../services/bookings.service';
import { user } from '../../models/user';
@Component({
  selector: 'app-area-two',
  templateUrl: './area-two.component.html',
  styleUrls: ['./area-two.component.css']
})
export class AreaTwoComponent implements OnInit {


  user : user = new user();
  parkingRef:AngularFireList<parkingarea>;
  parkings:Observable<parkingarea[]>;
  tempSlotForModal: parkingarea;
  currentUserUID:string;
  fullDate:Date=new Date();
  date=this.fullDate.getDate();
  month=Number(this.fullDate.getMonth())+1;
  hours=this.fullDate.getHours();
  dateDisplay=this.fullDate.getFullYear();
  savingDate=this.date.toString().concat("-").concat(this.month.toString()).concat("-").concat(this.dateDisplay.toString());
  cout = 0;
  bookingRef:AngularFireList<bookings>;
  bookings:Observable<bookings[]>;
  currtentyOpenedTemplate:HTMLInputElement;
  currentlySelectedSlotId:string;
  currentlySelectedParking:parkingarea;
  admin: boolean;
  
  
  constructor(private ms: ModelsService, private bs: BookingsService,private dbs: DatabaseService,private afd: AngularFireDatabase)
  {
    this.parkings=this.dbs.parkingsTwo;
    this.bookingRef=this.afd.list('bookings/');
  this.bookings=this.bookingRef.snapshotChanges().pipe(
    map(changes=> changes.map(
    c=>({key: c.payload.key,...c.payload.val(),})
  )));
  }
  
timingArray:{"hour":string,"isAvailible":boolean}[]=[
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},


];



t(){
  this.cout=0;
  this.timingArray=[
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},
  {"hour":(this.cout++).toString(),"isAvailible":true},

];
}
  ngOnInit()
  {
    this.admin=JSON.parse(localStorage.getItem('authState')).type.admin;
    this.user=JSON.parse(localStorage.getItem('authState')).user;
    this.currentUserUID=this.user.uid;
    this.parkings.subscribe(res=>{res.forEach(res=>{console.log(res)})});
  }

openModal(template: HTMLInputElement, item: parkingarea)
{this.tempSlotForModal=item;
  this.ms.openModal(template);
}

setFalse=(hour:any)=>
{
  this.timingArray[hour].isAvailible=false;
  
}

getSelectedParkingsTimings(parking: parkingarea, template: HTMLInputElement)
{this.currentlySelectedParking=parking;
  this.currtentyOpenedTemplate=template;
  this.t();
  
  this.currentlySelectedSlotId=parking.name;
  this.bookingRef=this.afd.list('bookings/'+this.currentlySelectedSlotId+"/"+this.savingDate);
  this.bookings=this.bookingRef.snapshotChanges().pipe(
    map(changes=> changes.map(
    c=>({key: c.payload.key,...c.payload.val(),})
  )));
  // this.bookings.subscribe(element=>{element.forEach(element=>{console.log(element)})});
//  this.bookings.forEach(element=>{console.log(element)});
this.bookings.forEach(element=>{element.forEach(element=>{console.log(element)})});  
this.openModal(template,parking);
}





bookParking(hour: string)
  {
  
    let date=new Date();
    let daate=date.getDate().toString().concat("-").concat(date.getMonth().toString()).concat("-").concat(date.getFullYear().toString());

    let booking: bookings={
      uid:this.user.uid,
      date:date,
      duration:"1HOUR",
      parking_area_name:"parking-area-",
      solotId:this.currentlySelectedSlotId,
      day:date.getDate().toString(),
      hour:hour,
      key:this.user.uid.concat("-").concat(daate).concat("-").concat(this.currentlySelectedSlotId).concat("-").concat(hour),
      
    }
    this.bs.makeBooking(booking)
  }
  



cancelBooking(hour:string)
{
  let uidOfSelectedBooking;
  let keyOfSelectedBooking;
  this.bookings.forEach(element=>{element.forEach(element=>{if(element.hour==hour){
    this.bs.cancelBooking(this.currentlySelectedSlotId,hour,element.uid,element.key)
  }})});
 
  
 this.timingArray[hour].isAvailible=true;
  
}

  
}
