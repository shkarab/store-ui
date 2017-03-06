import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './../model/user';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(location: Location,private authService: AuthService, private fb: FormBuilder, private router: Router ) { }
  loginForm: FormGroup;
  location;
  ngOnInit() {
    this.location=location;
    this.loginForm = this.fb.group({
 
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
    this.authService.login(value).subscribe(res => {
      console.log('res', res);
     
      this.router.navigate(['/']);
    });
  }
   facebookLogin(){
      this.authService.auth('facebook');
     // location.href='http://localhost:3001/auth/facebook';
    //var newWindow =
    window.location.href=`http://localhost:3001/auth/facebook`;
    //, 'name', 'height=585, width=770';
	  //  if (window.focus) {
    //    newWindow.focus();
    //  }
   // this.authService.auth('facebook');
  }
//  loginWithFacebook() {
//    //location.href=`http://localhost:3001/auth/facebook?returnTo=${{location}}`;
//     var newWindow = window.open(`http://localhost:4200/auth/facebook`, 'name', 'height=585, width=770');
// 	   if (window.focus) {
//        newWindow.focus();
//      }
     
     
//     // if (this.authSub) this.authSub.unsubscribe();
//     // this.authSub = source.subscribe();
//     // this.authService.loginWithFacebook().subscribe(res => {
//     //   console.log('res', res);
     
//     //   this.router.navigate(['/']);
//     // });
//   }
}
