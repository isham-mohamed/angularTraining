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
  recievedTextChild1
  message="init"
  constructor() { }

  ngAfterViewInit(): void {
    this.recievedTextChild1=this.child1.message
  }

  sendToChilren(newMessage){
    this.message=newMessage
  }

}
