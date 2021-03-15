import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rective Forms';

  addressForm = new FormGroup({
    houseName:new FormControl(),
    pincode:new FormControl()
  })

  form= new FormGroup({
    username: new FormControl(),
    password : new FormControl(),
    address:this.addressForm
  })

  

  login(){
    console.log(this.form.value);
  }
}
