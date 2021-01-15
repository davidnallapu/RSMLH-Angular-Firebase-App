import { Component, OnInit } from '@angular/core';
import { UpdatesService } from './updates.service';
import { Update } from './update.model';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  updateList: Update[];
  constructor(private updateService: UpdatesService) { }

  ngOnInit() {
    this.updateService.getUpdateDetailList();
    this.updateService.updateDetailList.snapshotChanges().subscribe(
      list => {
        this.updateList=list.map(item => { return item.payload.val(); });
        
      });


  //  this.updatez=this.updateService.getUpdates();
  }

}
 