import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  url='http://localhost:3000/Devices'
  devices
  
  constructor(private http:HttpClient){
  }
  
  getData(){
    this.http.get(this.url)
    .subscribe((response:Response)=> {
     this.devices=response
    })
    return this.devices
  }

  postData(data){
    this.http.post(this.url,data)
    .subscribe(response=>{
      console.log(response);
    })
  }

  patchData(device){
    this.http.patch(this.url+'/'+device.id,{deviceName:device.deviceName})
      .subscribe(response => {
        console.log(response);
        
      })
  }

  putData(device){
    this.http.put(this.url+'/'+device.id,device)
      .subscribe(response => {
        console.log(response);
      })
  }

  DeleteData(device){
    this.http.delete(this.url+'/'+device.id)
      .subscribe(response => {
        console.log(response);
      })
    }
}
