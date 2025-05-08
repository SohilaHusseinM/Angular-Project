import { Component, EventEmitter,Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styles: ``
})
export class FormComponent {

  PrForm= new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    disc:new FormControl(null,[Validators.required,Validators.minLength(15)]),
    img:new FormControl(null,[Validators.required,Validators.pattern(/\.jpg$/i)]),
    rate:new FormControl(null,[Validators.required,Validators.min(1),Validators.max(5)])
  })

  get nameValid(){
    return this.PrForm.controls.name.valid
  }
  get discValid(){
    return this.PrForm.controls.disc.valid
  }
  get imgValid(){
    return this.PrForm.controls.img.valid
  }
  get rateValid(){
    return this.PrForm.controls.rate.valid
  }

  @Output() addProduct=new EventEmitter();

  sendDtProduct(){
    if(this.PrForm.valid){
      let prd={name:this.PrForm.controls.name.value,
        disc:this.PrForm.controls.disc.value,
        img:this.PrForm.controls.img.value,
        rate:this.PrForm.controls.rate.value
      }
      this.addProduct.emit(prd);
      this.PrForm.reset();
    }
  }
}
