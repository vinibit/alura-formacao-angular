import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
  declarations: [
    HomeComponent, 
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers: [
    SignUpService
  ]
})
export class HomeModule { }
