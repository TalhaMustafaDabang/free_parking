import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FeedbackReviewComponent } from './feedback-review/feedback-review.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgForm } from '../../../node_modules/@angular/forms';
import { EmailService } from '../services/email.service';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit, AfterViewInit {
@ViewChild(FeedbackReviewComponent) child ;
  constructor(private es: EmailService) { }
emailRecived:string;
email:string="";
message:string;
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.emailRecived = this.child.email;
  }

  submit(form:NgForm)
  {
    this.email=form.value.emailRecived;
    this.message=form.value.message;
    this.es.sendBookingConfirmationEmail(this.email,this.message);
  }

}
