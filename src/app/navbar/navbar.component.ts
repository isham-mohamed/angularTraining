import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  name = "Name"
  constructor(
    public authService:AuthService,
    private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.route.navigate([''])
    this.authService.logout()
  }

}
