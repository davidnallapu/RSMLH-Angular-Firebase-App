import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { UpdatesComponent } from './updates/updates.component';

import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes =[
  
    { path: 'home',             component: HomeComponent},
    { path: 'team',     component: ProfileComponent },
    { path: 'login',           component: SignupComponent },
    { path: 'support',          component: LandingComponent },
    {path: 'testimonies', component:TestimonialsComponent},
    {path: 'updates', component:UpdatesComponent},
    {path: 'admin-page', component:AdminPageComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
