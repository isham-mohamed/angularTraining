import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Forms Array';
  form= new FormGroup({
    questions:new FormArray([])
  })
  
  get questions(){
    return this.form.get('questions') as FormArray
  }

  addqs(qs:HTMLInputElement){
    this.questions.push(new FormControl(qs.value))
  }
  
  removeqs(qs:FormControl){
    let index = this.questions.controls.indexOf(qs)
    this.questions.removeAt(index)
  }
  
  log(){
    console.log(this.form.value);
    
  }


}
