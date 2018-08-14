import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthenticationService } from '../services/authentication.service';
import { auth } from '../models/auth';
import { Router } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth:Observable<auth>;
  constructor(private router: Router,private authS: AuthenticationService) { }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {
     this.auth=<Observable<auth>>JSON.parse(localStorage.getItem('authState'))
    
  }

  logout()
  {
    this.authS.signOut();
    this.auth=JSON.parse(localStorage.getItem('authState'))
    // this.auth=this.authS.checkAuth();
  }

}
