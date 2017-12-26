import { Component, OnInit } from '@angular/core';
import { User } from '../../Services/User/user';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-anouncement',
  templateUrl: './anouncement.component.html',
  styleUrls: ['./anouncement.component.css']
})
export class AnouncementComponent implements OnInit {
  users: User[];
  selectedUser: User;
  selected = false;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  SelectUser(user: User): void{
    this.selected = true;
    this.selectedUser = user;
  }
  
  Hide(): void{
    this.selected = false;
  }

  getUsers(): void{
    this.userService.getUsers().then(users => this.users = users);
  }

}
