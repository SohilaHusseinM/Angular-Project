import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule,CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  name:string="";
  age:string="";

  @Output() signEevent=new EventEmitter();

  addStd(){
    if(+this.age<=25 && +this.age>=1 &&this.name.length>=3){
    let stdObj={name:this.name,age:this.age}
    console.log(stdObj);
  
    this.signEevent.emit(stdObj)
    this.name="";
    this.age="";
    }
  }

  

}
