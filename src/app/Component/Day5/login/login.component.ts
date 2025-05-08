import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  dataForm= new FormGroup({
    password:new FormControl(null,[Validators.required,Validators.minLength(10)]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      )
    ]),
  })

  
  get emailValid(){
    return this.dataForm.controls.email.valid
  }

  get passwordValid(){
    return this.dataForm.controls.password.valid
  }
  submit(){
    this.dataForm.reset();
  }
}
