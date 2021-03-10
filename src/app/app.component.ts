import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
    <h2>{{deviceInfo.deviceName | lowercase}}</h2>
    <h2>{{deviceInfo.noOfModels | number}}</h2>
    <h2>price:{{deviceInfo.price |number:'1.1-1'}}</h2>
    <h2>{{deviceInfo.profit |number:'4.3-3'}}</h2>
    <h2>{{deviceInfo.latestReleaseDate | date:'medium'}}</h2>
  `
})
export class AppComponent {
  deviceInfo={
    deviceName:"One Plus",
    price:1234.5678,
    profit:120.5678,
    noOfModels:65246787,
    latestReleaseDate: new Date(2020,3,10)
  
  }
}
