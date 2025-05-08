import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
  
  dataForm= new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(10)]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      )
    ]),
    age:new FormControl(null,[Validators.required,Validators.min(15),Validators.max(60)])
  })

  get nameValid(){
    return this.dataForm.controls.name.valid
  }
  get emailValid(){
    return this.dataForm.controls.email.valid
  }
  get ageValid(){
    return this.dataForm.controls.age.valid
  }
  get passwordValid(){
    return this.dataForm.controls.password.valid
  }
  submit(){
    this.dataForm.reset();
  }
}
