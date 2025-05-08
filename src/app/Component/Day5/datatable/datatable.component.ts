import { Component } from '@angular/core';
import { SignInComponent } from '../../Day3/sign-in/sign-in.component';
import { DataTableComponent } from '../../Day3/data-table/data-table.component';

@Component({
  selector: 'app-datatable',
  imports: [SignInComponent,DataTableComponent],
  templateUrl: './datatable.component.html',
  styles: ``
})
export class DatatableComponent {
  studentArr:{name:string,age:string}[]=[]
  getDataFromsignIn(signInData:any){
    console.log(signInData);
    this.studentArr.push(signInData);
  }
}
