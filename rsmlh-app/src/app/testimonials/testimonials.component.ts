import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from './testimonials.service';
import { Testimonial } from './testimonial.model';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonyList: Testimonial[];
  rowIndexArray: any[];
  constructor(private testimonyService: TestimonialsService) { }


  ngOnInit() {
    this.testimonyService.getTestimonyDetailList();
    this.testimonyService.testimonyDetailList.snapshotChanges().subscribe(
      list => {
        this.testimonyList=list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.testimonyList.length+1) / 3)).keys());
      });


  //  this.testimonyz=this.testimonyService.gettestimonys();
  }

}
