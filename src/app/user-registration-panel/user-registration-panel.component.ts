
import { Component, OnInit,Output } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// import { userM } from '../models/user';
import { DatabaseService } from '../services/database.service';
// import { user } from '../models/user';
import * as firebase from 'firebase';
import { user } from '../models/user';
// import { admin } from '../models/admin';

@Component({
  selector: 'app-user-registration-panel',
  templateUrl: './user-registration-panel.component.html',
  styleUrls: ['./user-registration-panel.component.css']
})
export class UserRegistrationPanelComponent implements OnInit {




  constructor(private authService: AuthenticationService,private router: Router,private db: DatabaseService) { }

  ngOnInit() {
  }
// admin: admin= new admin();
userModel: user;
  submit(form:NgForm)
  {
    this.userModel= new user();
    this.userModel.email=form.value.email;
    this.userModel.password=form.value.password;
    this.userModel.number=form.value.number;
    this.userModel.userName=form.value.name;
    this.userModel.type="user";
    // this.admin.email=form.value.email;
    // this.admin.type="admin";
    this.authService.emailSignUp(this.userModel)
    .then((user)=>{ 
     
       switch(this.userModel.type)
       {
         case 'user':
         {
           this.router.navigate(['user-login']);
           break;
         }
        
        case 'admin':
        {
          this.router.navigate(['admin-login']);
          break;
        }
      }
  })
    .catch(error => console.log(error.message));
  }



}

