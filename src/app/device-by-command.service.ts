import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceByCommandService {
  getDeviceList(){
    return ["samsung","oneplus"]
  }

  constructor() { }
}
