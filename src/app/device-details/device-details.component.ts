import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent {

  title = 'Device Details';
 
  device
  update=false

  

  constructor(private deviceService:DeviceService){
    this.getData('1')
  }

  getData(deviceId){    
    this.deviceService.getDevice(deviceId)
    .subscribe((response:Response)=> {
       this.device=response
    }, 
    error => {
      alert('an unexpected error')
      console.log(error);
    })
  }
  
  updateDevice(newName){
    let oldName=this.device['deviceName']
    this.device['deviceName']=newName
    this.deviceService.patchData(this.device)
    .subscribe(response => {
      console.log(response);
    }, 
    error => {
      alert('an unexpected error')
      this.device['deviceName']=oldName
      console.log(error);
    })
    this.toggleUpdate()
  }

  deleteDevice(){
    this.deviceService.DeleteData(this.device)
    .subscribe(response => {
      console.log(response);
    }, 
    (error:Response) => {
      if(error.status===404)
        alert('Already deleted')
      console.log(error);
    })
  }
  
  toggleUpdate(){
    this.update=!this.update
  }
}
