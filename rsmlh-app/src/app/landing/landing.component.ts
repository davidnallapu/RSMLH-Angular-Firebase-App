import { Component, OnInit } from '@angular/core';
import { Feedback } from './feedback.model';
import { FeedbackService } from './feedback.service';
import { FormGroup, FormControl,ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
 
  feedbackList: Feedback[];
  rowIndexArray: any[];
  issSubmitted: boolean=false;
  feedbackForm= new FormGroup({
    'name': new FormControl(),
    'email': new FormControl(),
    'message': new FormControl()
  })

  constructor(private feedbackService:FeedbackService,private storage: AngularFireStorage) { }


  onSubmitFeedback(formValue){
    this.issSubmitted = true;
    if (this.feedbackForm.valid) {
      this.feedbackService.insertFeedbackDetails(formValue);
      this.resetForm();
    }
  }

  ngOnInit() {
this.feedbackService.getFeedbackDetailList();
this.feedbackService.feedbackDetailList.snapshotChanges().subscribe(
  list => {
    this.feedbackList=list.map(item => { return item.payload.val();});
    
  }
  
);

  }

  resetForm() {
    this.feedbackForm.reset();
    this.feedbackForm.setValue({
      name: '',
      email: '',
      message: ''
    });
    this.issSubmitted = false;

  }
 
 

}
