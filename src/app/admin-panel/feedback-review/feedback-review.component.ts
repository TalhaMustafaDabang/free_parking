import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '../../../../node_modules/angularfire2/database';
import { feedback } from '../../models/feedback';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { ModalsServiceService } from '../../services/modals-service.service';
import { ModelsService } from '../../services/models.service';
@Component({
  selector: 'app-feedback-review',
  templateUrl: './feedback-review.component.html',
  styleUrls: ['./feedback-review.component.css']
})
export class FeedbackReviewComponent implements OnInit {
  email:string="lkj";
  feedbacksRef: AngularFireList<feedback>;
  feedbacks:Observable<feedback[]>;
  
  
    constructor(private ms: ModelsService,private afd: AngularFireDatabase)
    {
      this.feedbacksRef=afd.list('/feedbacks');
      this.feedbacks=this.feedbacksRef.snapshotChanges().pipe(
        map(changes=> changes.map(
        c=>({key: c.payload.key,...c.payload.val(),})
      )));
    }

    openModal(template: HTMLInputElement, email: string)
    {
      console.log(email);
      this.email=email;
      this.ms.openModal(template);
      
      
    }

    ngOnInit() {
    }
  

}
