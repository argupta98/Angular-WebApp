import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AnouncementComponent } from './Components/anouncement/anouncement.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';

import { UserService } from './Services/User/user.service';

import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnouncementComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
