import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users=[
    {
    username:"isham",
    password:"1234",
    admin:true,
  },
  {
    username:"user",
    password:"user",
    admin:false,
  }]

  login(userCredentials):{username,password,admin}|Boolean{   
    for(let user of this.users){
      if (user.username===userCredentials.username && user.password===userCredentials.password){
        localStorage.setItem('user', JSON.stringify(user))
        return true
      }
    }
    return false
  }

  logout(){
    localStorage.removeItem('user')
  }

  isLoggedIn(){
    return localStorage.getItem('user')
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'))
  }
}
