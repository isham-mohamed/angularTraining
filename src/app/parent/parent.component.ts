import { Input, ViewChild, AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(Child1Component) child1
  recievedTextFromChild
  message=""
  constructor() { }

  ngAfterViewInit(): void {
    this.recievedTextFromChild=this.child1.message
  }

  receiveMessage(message) {
    this.recievedTextFromChild = message
  }
  
  sendToChilren(newMessage){
    this.message=newMessage
  }

}
