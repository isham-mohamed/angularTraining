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
 
  devices=[]

  form=new FormGroup({
    id:new FormControl(),
    deviceName: new FormControl(),
    companyName: new FormControl()
  });

  constructor(private deviceService:DeviceService){
  }

  sendData(){
    this.deviceService.postData(this.form.value)
    this.devices.push(this.form.value)
  }

  getData(){    
    this.devices=this.deviceService.getData()
  }
  
  updateDevice(device){
    device['deviceName']="device name Updated"
    // this.deviceService.patchData(device)
    this.deviceService.putData(device)
  }

  deleteDevice(device){
    let index = this.devices.indexOf(device)
    this.devices.splice(index,1)
    this.deviceService.DeleteData(device)
  }
  
}
