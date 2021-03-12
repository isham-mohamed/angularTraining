import { NONE_TYPE } from "@angular/compiler"

export class DeviceService{
    getDeviceList(){
        let deviceDetails=[{
            name:'Oneplus',
            price:52000,
            available:true,
        },
        {
            name:'Apple',
            price:60000,
            available:false,
        },
        {
            name:'Nokia',
            price:5000,
            available:false,
        },{
            name:'Redmi',
            price:1600,
            available:null
        }]
        return deviceDetails
    }
}