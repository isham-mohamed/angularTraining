import { DeviceService } from './device.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Http Services';
 
  devices

  form=new FormGroup({
    id:new FormControl(),
    deviceName: new FormControl(),
    companyName: new FormControl()
  });

  constructor(private deviceService:DeviceService){
  }

  sendData(){
    this.deviceService.postData(this.form.value)
    .subscribe(response=>{
      console.log(response);
    }, 
    error => {
      alert('an unexpected error')
      console.log(error);
    })
    this.devices.push(this.form.value)
  }

  getData(){    
    this.deviceService.getData()
    .subscribe((response:Response)=> {
       this.devices=response
    }, 
    error => {
      alert('an unexpected error')
      console.log(error);
    })
  }
  
  updateDevice(device){
    device['deviceName']="device name Updated"
    // this.deviceService.patchData(device)
    this.deviceService.putData(device)
    .subscribe(response => {
      console.log(response);
    }, 
    error => {
      alert('an unexpected error')
      console.log(error);
    })
  }

  deleteDevice(device){
    let index = this.devices.indexOf(device)
    this.devices.splice(index,1)
    this.deviceService.DeleteData(device)
    .subscribe(response => {
      console.log(response);
    }, 
    (error:Response) => {
      if(error.status===404)
        alert('Already deleted')
      console.log(error);
    })
  }
  
}
