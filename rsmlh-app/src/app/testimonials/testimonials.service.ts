import { Injectable } from '@angular/core';
import { Testimonial } from './testimonial.model';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  testimonyDetailList: AngularFireList<any>; 

constructor(private firebase: AngularFireDatabase) {}

getTestimonyDetailList(){
   this.testimonyDetailList=this.firebase.list('testimonyDetails');
} 

insertTestimonyDetails(testimonyDetails){
this.testimonyDetailList.push(testimonyDetails);
  }




}
