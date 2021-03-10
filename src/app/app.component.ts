import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
    <h2>{{deviceInfo.deviceName}}</h2>
    <h2>{{deviceInfo.noOfModels}}</h2>
    <h2>{{deviceInfo.price}}</h2>
    <h2>{{deviceInfo.profit}}</h2>
    <h2>{{deviceInfo.latestReleaseDate}}</h2>
  `
})
export class AppComponent {
  deviceInfo={
    deviceName:"=One Plus",
    price:1234.5678,
    profit:120.5678,
    noOfModels:6524,
    latestReleaseDate: new Date(2020,3,10)
  
  }
}
