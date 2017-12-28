import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnouncementComponent } from './Components/anouncement/anouncement.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home',  component: AnouncementComponent },
  { path: 'SignIn',     component: SignInComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}