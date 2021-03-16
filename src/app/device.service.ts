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
    return this.http.get(this.url)
    
  }

  postData(data){
    return this.http.post(this.url,data)
    
  }

  patchData(device){
    return this.http.patch(this.url+'/'+device.id,{deviceName:device.deviceName})
      
  }

  putData(device){
    return this.http.put(this.url+'/'+device.id,device)
  }

  DeleteData(device){
    return this.http.delete(this.url+'/'+device.id)
  } 
}
