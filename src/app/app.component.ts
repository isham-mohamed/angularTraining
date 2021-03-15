import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rective Forms';
  form
  constructor( fb:FormBuilder){
    this.form=fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      address:fb.group({
        houseName:[],
        pincode:[]
      })
    })

  }

  // form = new FormGroup({
  //   username: new FormControl(),
  //   password : new FormControl(),
  //   address: new FormGroup({
  //     houseName:new FormControl(),
  //     pincode:new FormControl()
  //   })
  // })


  

  login(){
    console.log(this.form.value);
  }
}
