import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  

  constructor(
    private router:Router,
    public authService:AuthService,
    private deviceService:DeviceService,
    private route:ActivatedRoute){
  }

  ngOnInit(): void {
    let id
    this.route.paramMap.subscribe(params=>{
      id = +params.get('deviceId')
    })
    console.log(id);
    
    this.getData(id)  
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
    this.router.navigate(['/device'])
  }
  
  toggleUpdate(){
    this.update=!this.update
  }
}
