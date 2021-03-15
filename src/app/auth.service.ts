import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login({username,password}){
    if(username==="isham" && password==="123")
      return true
    return false
  }
}
