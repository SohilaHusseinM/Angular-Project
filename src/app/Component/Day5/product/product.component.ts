import { Component } from '@angular/core';
import { FormComponent } from "../../Day4/form/form.component";
import { ProductsComponent } from '../../Day4/products/products.component';

@Component({
  selector: 'app-product',
  imports: [FormComponent,ProductsComponent],
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent {
  product:any
  addProduct(pr:any){
    this.product=pr;
  }
}
