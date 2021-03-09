import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:`
    <!-- passing data from Dom to class - Method 1-->
    <input type="text" #name id="name" (keyup.enter)="log(name.value)"> 
               <!-- #name is known as the template variable and is then passed through the funtion-->
    <!-- 2 way binding using ngModel - Method 1-->
    <input type="text" [(ngModel)]="title" id="name" (keyup.enter)="logTitle()">
               <!-- ngModel is he decorator used for 2 way bining-->
`
})
export class AppComponent {
  title = 'angularTraining';
  log(name){

    console.log(name);
  } 

  logTitle(){
  console.log(this.title);
  }
}
