import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {environment} from  '../environments/environment'
import { HomeModule } from './home/home.module';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UpdatesComponent } from './updates/updates.component';
import { FeedbackService } from './landing/feedback.service';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { AgmCoreModule } from '@agm/core';
import { AuthServiceService } from './signup/auth-service.service';
import { UpdatesService } from './updates/updates.service';
import { TestimonialsService } from './testimonials/testimonials.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    TestimonialsComponent,
    GalleryComponent,
    UpdatesComponent,
    AdminPageComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    HttpModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdXhAhpXctvwA0v9rBVZcZKvq028sXax4'
    })
  ],
  providers: [FeedbackService, AuthServiceService, UpdatesService, TestimonialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
