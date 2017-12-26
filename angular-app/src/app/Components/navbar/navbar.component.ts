import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged_in = false;
  links: string[] = ['Home', 'SignUp', 'SignIn'];
  constructor() { }
  ngOnInit() {
    if(this.logged_in){
      this.links = ['Logout', 'Make Wish']
    }
  }

}
interface nav_link{
  name: String; 
  link: String;
}