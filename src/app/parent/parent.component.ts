import { Child1Component } from './../child1/child1.component';
import { Input, ViewChild, AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  messagetoChild=""
  messageFromChild=""

  // USING VIEW CHILD
  @ViewChild(Child1Component) childAccess
    ngAfterViewInit(){
    this.messageFromChild=this.childAccess.messageToParent
  }

  sendMessage(message){
    this.messagetoChild=message
  }

  //USING EVENT EMITTER AND @OUTPUR DECORATOR
  onEventMessage($event){
    this.messageFromChild=$event
}
}
