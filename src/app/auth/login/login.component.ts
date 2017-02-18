import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './../model/user';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router ) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({

      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
    this.authService.login(value).subscribe(res => {
      console.log('res', res);
      this.router.navigate(['/product']);
    });
  }

}
