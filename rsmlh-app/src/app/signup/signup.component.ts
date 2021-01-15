import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { AuthServiceService, AuthResponseData } from './auth-service.service';
import { logging } from 'protractor';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;

    loginForm= new FormGroup({
        'email': new FormControl(),
        'password': new FormControl(),
      })

      constructor(private authService: AuthServiceService, private router: Router) { }


    loggedin(form: NgForm){
        if (!form.valid) {
            return;
          }
          const email = form.value.email;
          const password = form.value.password;
      
          let authObs: Observable<AuthResponseData>;
      
   
       authObs= this.authService.login(email,password)
    authObs.subscribe(
        resData=>{
            console.log(resData);
        this.router.navigate(['/admin-page']);
        }
    );

    
    }



    ngOnInit() {}
}
