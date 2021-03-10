import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
;

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Input() recievedTextParent
  @Output() messageEventToParent = new EventEmitter<string>();
  message="Child 1"
  constructor() { }

  ngOnInit(): void {
  }
  
  toparent(newMessage){
    this.messageEventToParent.emit(newMessage)
  }
}
