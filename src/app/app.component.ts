import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <input [value]="title1">
    {{title1}} 
    <button (click)="changeText()">Change Text</button> -->
    <table>
      <tr>
        <td [attr.colSpan]="colSpanNo">table</td>
      </tr>
    </table> -->
    <button class="button" [class.active]="isActive">Button</button>
    <button class="button" [style.background-color]="'blue'">Button</button> 
    <input (keyup.enter)="onKeyUp($event)">
    <div (click)="onDivClick()">
      <button (click)="buttonClick($event)">Button</button>
    </div>
    <input #inputTag (keyup.enter)="onKeyUp(inputTag.value)">
  `
})
export class AppComponent {
  isActive=true
  title1="Binding"
  colSpanNo=2
  onDivClick(){
    console.log("div click");
  }
  buttonClick($event){
    $event.stopPropagation();
    console.log("button click");
  }
  changeText(){
    this.title1="changed Message"
    console.log(this.title1);
  }
  onKeyUp(inputText){
    console.log(inputText);
  }
}
