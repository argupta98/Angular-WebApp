import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AnouncementComponent } from './Components/anouncement/anouncement.component';

import { UserService } from './Services/User/user.service';
import { SignInComponent } from './Components/sign-in/sign-in.component';


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
    RouterModule.forRoot([
      {
        path: 'SignIn',
        component: SignInComponent
      },
      {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
      },
      {
        path: 'Home',
        component: AnouncementComponent
      }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
