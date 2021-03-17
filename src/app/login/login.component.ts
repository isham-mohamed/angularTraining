import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin=false
  form

  constructor(
    private fb :FormBuilder,
    private authService:AuthService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(userCredentials){ 
    if(this.authService.login(userCredentials)){
      this.route.navigate([''])
      console.log(true);
    }
    else{
      this.invalidLogin=true
      console.log(false);
    }
      
  }

}
