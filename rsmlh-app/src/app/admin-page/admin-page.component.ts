import { Component, OnInit } from '@angular/core';
import { Feedback } from 'app/landing/feedback.model';
import { FeedbackService } from 'app/landing/feedback.service';
import { UpdatesService } from 'app/updates/updates.service';
import { TestimonialsService } from 'app/testimonials/testimonials.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  imgSrc: string="";
  selectedImage: any=null;
  isSubmitted: boolean=false;
  issSubmitted: boolean=false;
  feedbackList: Feedback[];
  
  updateForm= new FormGroup({
    'event': new FormControl('',Validators.required),
    'desc': new FormControl('',Validators.required),
    'img': new FormControl('',Validators.required)
  })

  testimonyForm= new FormGroup({
    'name': new FormControl('',Validators.required),
    'desc': new FormControl('',Validators.required),
    'img': new FormControl('',Validators.required)
  })

  constructor(private feedbackService:FeedbackService,private updateService: UpdatesService, private testimonyService: TestimonialsService,
    private storage:AngularFireStorage    
    ) { }


  feedback:Feedback[];

  onSubmitTestimony(formValue){
    this.issSubmitted = true;
    if (this.testimonyForm.valid) {
      var filePath = `testimonials/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['img'] = url;
            console.log(formValue);
            this.testimonyService.insertTestimonyDetails(formValue);
            this.resetFormT();
          })
        })
      ).subscribe();
  }
  }


  onSubmitUpdate(formValue){
    this.isSubmitted = true;
    if (this.updateForm.valid) {
      var filePath = `updates/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['img'] = url;
            console.log(formValue);
            this.updateService.insertUpdateDetails(formValue);
            this.resetFormU();
          })
        })
      ).subscribe();
  }}

  onFileSelected(event: any){
    if(event.target.files && event.target.files[0] ){
      const reader = new FileReader();
      reader.onload=(e: any) =>  this.imgSrc=e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage=event.target.files[0];
    }
    else{
      this.imgSrc=null;
      this.selectedImage=null;
    }
  }

  ngOnInit() {
    this.updateService.getUpdateDetailList();
    this.testimonyService.getTestimonyDetailList();
    this.feedbackService.getFeedbackDetailList();
this.feedbackService.feedbackDetailList.snapshotChanges().subscribe(
  list => {
    this.feedbackList=list.map(item => { return item.payload.val(); });
    
  }
  
);
    this.resetFormU();
    this.resetFormT();

  }

  resetFormU() {
    this.updateForm.reset();
    this.updateForm.setValue({
      event: '',
      img: '',
      desc: ''
    });
    this.imgSrc =null;
    this.selectedImage = null;
    this.isSubmitted = false;

  }

  resetFormT() {
    this.testimonyForm.reset();
    this.testimonyForm.setValue({
      name: '',
      img: '',
      desc: ''
    });
    this.imgSrc = "";
    this.selectedImage = null;
    this.issSubmitted = false;
  }







}
