import { Component, OnInit } from '@angular/core';
import { DeviceByCommandService } from '../device-by-command.service';
import { DeviceService } from '../device.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.scss'],
  template: `
    <p>{{title}}</p> <!--String Interpolation '{{ variable-name }}'for binding variable in DOM -->
    <ul>
      <li *ngFor="let device of deviceList">{{device}}</li> <!-- *ngFor decorator for parsing a list -->
      <li *ngFor="let device of devicelist2">{{device}}</li>
    </ul>
    `
})
export class HomeComponent{
  title="Device List"
  deviceList
  devicelist2
  constructor(
    device:DeviceService, //by registeing the service in module
    deviceService1:DeviceByCommandService // service as injectable class
    ) { //Dependency injection
      this.deviceList=device.getDeviceList()
      this.devicelist2=deviceService1.getDeviceList()
  }

}
