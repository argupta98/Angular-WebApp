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
  }

  OnClick(): void{
    this.logged_in = !this.logged_in;
    if(this.logged_in){
      this.links = ['Logout', 'Make Wish']
    }
  }

}

interface navlink{
  name: String; 
  link: String;
}