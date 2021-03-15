import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from './custom-validator.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rective Forms';
  form = new FormGroup({
    username:new FormControl('',
    //normal validator
    [
      Validators.required,
      Validators.minLength(5),
      UsernameValidator.cannotContainSpace,
    ],
    //async validaotrs
    UsernameValidator.uniqueUserName
    ),
    password:new FormControl()
  });

  login(){
    this.form.setErrors({InvalidLogin:true})
    console.log(this.form);
  }

}
