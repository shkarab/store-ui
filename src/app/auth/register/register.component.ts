import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './../model/user';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
userForm:FormGroup;


  constructor(private authService: AuthService,private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', Validators.required],
      password: ['', Validators.required]
    
    });
  }
   onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
    this.authService.register(value).subscribe(res => {
      console.log('res',res);
    });
  }

}
