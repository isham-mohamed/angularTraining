import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Input('fromParent') recievedTextParent
  message="init Child 1"
  recievedTextChild2
  constructor() { }

  ngOnInit(): void {
  }

  toparent(newMessage){
    this.message=newMessage
  }

}
