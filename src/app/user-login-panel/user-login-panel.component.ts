import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login-panel',
  templateUrl: './user-login-panel.component.html',
  styleUrls: ['./user-login-panel.component.css']
})
export class UserLoginPanelComponent implements OnInit {

  
  email: string;
  password: string;
  msg: string;
    constructor( private router: Router,private authService: AuthenticationService ) { }
  
    ngOnInit() {
    // this.router.isActive("company-user-profile",)
    }
  

    submit(form:NgForm)
    {
      this.authService.emailLogin(form.value.email,form.value.password,"user")
      .then(()=>{ this.authService.checkAuth(); })
      .catch(error => this.msg = error.message);
    }


}
