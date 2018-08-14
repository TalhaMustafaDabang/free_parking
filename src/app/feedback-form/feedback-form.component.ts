import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '../../../node_modules/angularfire2/firestore';
import { feedback } from '../models/feedback';
import { map } from 'rxjs/operators';
import { Observable } from '../../../node_modules/rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '../../../node_modules/@angular/router';
import { DatabaseService } from '../services/database.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '../../../node_modules/angularfire2/database';
import { promise } from '../../../node_modules/protractor';
import { user } from '../models/user';
@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
 feedbacksRef: AngularFireList<feedback>;
 feedbacks:Observable<feedback[]>;
 user : user = new user();
feedback:feedback;
   constructor(private afd: AngularFireDatabase,private dbs: DatabaseService,private afs: AngularFirestore,private auth:AuthenticationService, private router: Router)
    {
      this.feedbacksRef=this.afd.list('feedbacks/');
      this.feedbacks=this.feedbacksRef.snapshotChanges().pipe(
        map(changes=> changes.map(
          c=>({key: c.payload.key,...c.payload.val(),})
        ))
      );
    }
    
ngOnInit()
{
  this.user=JSON.parse(localStorage.getItem('authState')).user;
  this.feedbacks.subscribe(res=>{res.forEach(res=>{console.log(res)})});
}

submit(f: NgForm)
{
  this.feedback=new feedback();
  let date :Date= new Date();
  this.feedback.date=date.toString();
  this.feedback.experience=f.value.experience;
  this.feedback.userName=this.user.userName;
  this.feedback.userEmail=this.user.email;
  this.feedback.feedback_message=f.value.feedback_message;
  this.feedback.uid=this.user.uid;
  this.afd.list('feedbacks/').set(this.feedback.date+this.feedback.uid,this.feedback)
  .then(res=>alert("Thanks for your feedback, we will response you soon."))
  .catch(err=>{alert("Error Occuered"+err)});
  // this.afd.list('parking-areas/'+'parking-area-1').set('1-J',{"name":"1-J","isFree":"true"});
  // this.afd.list('parking-areas/'+'parking-area-2').set('2-J',{"name":"2-J","isFree":"true"});
  // this.afd.list('parking-areas/'+'parking-area-3').set('3-J',{"name":"3-J","isFree":"true"});
  // this.afd.list('parking-area-two').set('2-A',{"name":"2-A","isFree":"true"});
}




}
