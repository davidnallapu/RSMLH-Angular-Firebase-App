import { Injectable } from '@angular/core';
import { Update } from './update.model';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UpdatesService {

  updateDetailList: AngularFireList<any>; 

constructor(private firebase: AngularFireDatabase) {}

getUpdateDetailList(){
   this.updateDetailList=this.firebase.list('updateDetails');
} 

insertUpdateDetails(updateDetails){
this.updateDetailList.push(updateDetails);
}

}   
