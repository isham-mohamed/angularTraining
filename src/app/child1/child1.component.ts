import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
;

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  messageToParent="" 

  //To recieve data from parent
  @Input() messageFromParent

  //to send data to parent
  @Output() messageEvent = new EventEmitter<string>()
  emitMessage(){    
    this.messageEvent.emit(this.messageToParent)
  }
}
