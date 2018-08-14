// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { auth } from '../models/auth';
import { Observable } from 'rxjs';
// import { CompanyUser } from '../models/companyUser';
// import { studentUser } from '../models/studentUser';
// import { userM } from '../models/user';
import { element } from 'protractor';
import { DatabaseService } from './database.service';
import { user } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
public user:Observable<firebase.User>;
 auth:auth=new auth();
 usersRef:AngularFireList<user>;
 users:Observable<user[]>;
//  students:studentUser=new studentUser();
//  companies:CompanyUser=new CompanyUser();
// userDetails:{"name":string,"email":string,"uid":string}={"name":"","email":"","uid":""};
// userDetails:userM=new userM();
userModel:user=new user();
  authState: any = null;
  signupType:any="";


  constructor(private afd: AngularFireDatabase,private afAuth: AngularFireAuth,  private router:Router) {
    this.usersRef=afd.list('users/');
    this.users=this.usersRef.snapshotChanges().pipe(
      map(changes=> changes.map(
      c=>({key: c.payload.key,...c.payload.val(),})
    )));




this.user=afAuth.authState;
            // this.afAuth.authState.subscribe((auth) => {
            //   this.authState = auth
            // });


           
            

          }

        
// EMAIL SIGNUP
emailSignUp(userM: user) {
  
  return this.afAuth.auth.createUserWithEmailAndPassword(userM.email, userM.password)
      .then((user) => {
      
     userM.uid =user.user.uid;
     this.usersRef.set(userM.uid,userM)
     .then(()=>{alert("Congratulations You Are Successfully Registered!")})
      // this.dbs.makeUser(userM);
      //   this.authState = user;
      // this.signupType=userM.type;
      
      
    })
    .catch(error => console.log(error));
}


isAuthenticated():boolean
{
  return this.authState;
}

// EMAIL LOGIN
emailLogin(email:string, password:string,type:string) {

  let found:boolean=false;
  return this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then((user) => {
  
      this.auth.signin=true;
  
      // firebase.database().ref(type).orderByChild("uid").equalTo(firebase.auth().currentUser.uid).on("value",snap=>{console.log(snap)});
      firebase.database().ref('users/'+firebase.auth().currentUser.uid).on("value",(u)=>{
      
      if(u.val().uid==firebase.auth().currentUser.uid&&u.val().type=="user")
      {

        firebase.database().ref('users/'+user.user.uid).orderByValue().on("value",(u)=>this.auth.user=u.val());
        // this.auth.user.email=user.user.email;
        // this.auth.user.uid=user.user.uid;
        // this.auth.user.type="user";
        // this.auth.user.userName=user.user.displayName;
        
        
        
        this.auth.type.user=true;
        this.auth.type.anonymous=false;
       this.router.navigate(['user-page']);
      }
      else
      if(u.val().type=="admin")
      {
        this.auth.type.admin=true;
        this.auth.type.anonymous=false;
        this.router.navigate(['/admin-panel']);
        
      }

      localStorage.setItem('authState',JSON.stringify(this.auth));

      });

    // }//else end
     
    })
    .catch(error => alert(error.message));
}
resetAuth()
{
  
  this.auth.user.email=null; //update
  this.auth.user.userName=null;
  this.auth.user.type="anonymous";
  this.auth.user.uid=null;
  this.auth.signin=false;
  this.auth.type.anonymous=true;
  this.auth.type.admin=false;
  this.auth.type.user=false;
  localStorage.setItem('authState',JSON.stringify(this.auth))
}
checkAuth():auth
{
  console.log(JSON.parse(localStorage.getItem('authState')))
  return JSON.parse(localStorage.getItem('authState'));
}


  //// Sign Out ////
  signOut(): void {
    this.resetAuth();
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }






}