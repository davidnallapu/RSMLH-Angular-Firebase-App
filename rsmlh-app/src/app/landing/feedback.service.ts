import { Feedback } from "./feedback.model";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({ providedIn: 'root' })
export class FeedbackService{
    constructor(private firebase: AngularFireDatabase) {}


    feedbackDetailList: AngularFireList<any>; 
    
    
    getFeedbackDetailList(){
        this.feedbackDetailList=this.firebase.list('feedbackDetails');
     } 
     
     insertFeedbackDetails(feedbackDetails){
     this.feedbackDetailList.push(feedbackDetails);
       }

}