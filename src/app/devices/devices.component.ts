import { AuthService } from './../auth.service';
import { DeviceService } from './../device.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  
  devices 
  addForm=false

  get formValue(){
    return this.form.value
  }

  form=new FormGroup({
    id:new FormControl(),
    deviceName: new FormControl(),
    companyName: new FormControl()
  });
  
  constructor(
    public authService:AuthService,
    private deviceService:DeviceService) { }

  ngOnInit(): void {
    this.getData()
  }
  
  getData(){    
    this.deviceService.getData()
    .subscribe((response:Response)=> {
       this.devices=response       
    }, 
    error => {
      alert('Duplicate ID')
      console.log(error);
    })
  }

  sendData(){
    this.devices.push(this.formValue)
    this.deviceService.postData(this.formValue)
    .subscribe(response=>{
      console.log(response);
    }, 
    error => {
      alert('Error on adding')
      this.devices.pop(this.formValue)
      console.log(error);
    })
    this.toggleForm()
  }

  toggleForm(){
    this.addForm=!this.addForm
  }
}
