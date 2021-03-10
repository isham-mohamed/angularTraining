import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <button [id]="id" class="button" [style.backgroundColor]="'red'">Button</button>
    <input >
  `
})
export class AppComponent {
  isActive=false
  id="btn"
  imgSrc="https://images.freeimages.com/images/large-previews/867/volcanic-mt-ngauruhoe-1378772.jpg"
  
}
