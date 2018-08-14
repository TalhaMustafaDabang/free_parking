import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { user } from '../models/user';
// import { element } from '../../../node_modules/protractor';
import * as firebase from 'firebase';
import { element } from '../../../node_modules/@angular/core/src/render3/instructions';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
user:user=new user();
  constructor(private dbs: DatabaseService) {
    // firebase.database().ref('users/'+firebase.auth().currentUser.uid).on("value",(elemen)=>{console.log(elemen.val()),this.user=elemen.val()});
    firebase.database().ref('users/'+firebase.auth().currentUser.uid).on("value",(elemen)=>{console.log(elemen.val()),this.user=elemen.val()});
   
   }

  ngOnInit() {
    // firebase.database().ref('users/'+firebase.auth().currentUser.uid).on("value",(elemen)=>{console.log(elemen)});
    // this.dbs.getUserDetails().on("value",(element)=>{this.user=element.val(),console.log(user)});
    firebase.database().ref('users/'+firebase.auth().currentUser.uid).on("value",(elemen)=>{console.log(elemen.val()),this.user=elemen.val()});
   
  }

}
