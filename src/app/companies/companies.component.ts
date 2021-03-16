import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  devices 
  constructor(private deviceService:DeviceService) { }

  ngOnInit(): void {
    this.getData()
  }
  
  getData(){    
    this.deviceService.getData()
    .subscribe((response:Response)=> {
       this.devices=response       
    }, 
    error => {
      alert('an unexpected error')
      console.log(error);
    })
  }


}
