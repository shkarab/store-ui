import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { User } from './../../auth/model/user'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isAuth:boolean;
  user: User;

  constructor(private authService: AuthService) {

   }

  ngOnInit() {
  // this.getUserInfo();
 //this.isLogined();
  }

 isLogined():boolean{
  this.isAuth=this.authService.isLogined();
   
  return this.authService.isLogined();
   
}
 
  getUserInfo() {
   this.user=this.authService.getCurrentUser();
   this.user.image="sh.JPG";
   console.log("user",this.user);
    }
  

  logout() {
    console.log('logout');
    this.authService.logout();
    
  }
}
