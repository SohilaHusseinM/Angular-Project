import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {FirstComponent} from './Component/Day2/first/first.component';
import { SecondComponent } from './Component/Day2/second/second.component';
import {SignInComponent} from './Component/Day3/sign-in/sign-in.component';
import {DataTableComponent} from './Component/Day3/data-table/data-table.component';
import { FormComponent } from './Component/Day4/form/form.component';
import { ProductsComponent } from "./Component/Day4/products/products.component";
@Component({
  selector: 'app-root',
  imports: [RouterModule,FormComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nproject';
  /*studentArr:{name:string,age:string}[]=[]
  getDataFromsignIn(signInData:any){
    console.log(signInData);
    this.studentArr.push(signInData);
  }*/

    product:any
    addProduct(pr:any){
      this.product=pr;
    }

}
