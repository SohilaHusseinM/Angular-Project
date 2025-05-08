import { Input,Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent implements OnChanges{
  products:{name:string,disc:string,img:string,rate:string}[]=
  [{name:"mouse",disc:"Precision click tool",img:"Images/Day4/1.jpg",rate:"4"}];
  
  @Input() oneProduct:any

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes["oneProduct"].firstChange){
      this.products.push(this.oneProduct);
    }
  }
}
