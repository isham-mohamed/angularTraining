import { Component, OnInit } from '@angular/core';
import { DeviceByCommandService } from '../device-by-command.service';
import { Device } from '../device.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.scss'],
  template: `
    <p>{{title}}</p>
    <ul>
      <li *ngFor="let device of deviceList">{{device}}</li>
      <li *ngFor="let device of devicelist2">{{device}}</li>
    </ul>
    `
})
export class HomeComponent implements OnInit {
  title="Device List"
  deviceList
  devicelist2
  constructor(device:Device,deviceService1:DeviceByCommandService) { 
    this.deviceList=device.getDeviceList()
    this.devicelist2=deviceService1.getDeviceList()
  }

  ngOnInit(): void {
  }
}
