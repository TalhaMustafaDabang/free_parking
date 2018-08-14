import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { feedback } from '../models/feedback';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-feedback-reviews',
  templateUrl: './feedback-reviews.component.html',
  styleUrls: ['./feedback-reviews.component.css']
})
export class FeedbackReviewsComponent implements OnInit {
feedbacksRef: AngularFireList<feedback>;
feedbacks:Observable<feedback[]>;


  constructor(private afd: AngularFireDatabase)
  {
    this.feedbacksRef=afd.list('/feedbacks');
    this.feedbacks=this.feedbacksRef.snapshotChanges().pipe(
      map(changes=> changes.map(
      c=>({key: c.payload.key,...c.payload.val(),})
    )));
  }

  ngOnInit() {
  }

}
