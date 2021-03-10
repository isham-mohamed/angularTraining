import { Component } from '@angular/core';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Structural Components';
  deviceDetails
  constructor(private deviceService:DeviceService){
    this.deviceDetails=this.deviceService.getDeviceList()
  }
}