import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users=[
    {
    username:"IshamMohamed",
    password:"1234",
    admin:true,
  },
  {
    username:"user",
    password:"user",
    admin:false,
  }]

  login(user){

  }

  logout(){
    
  }
}
