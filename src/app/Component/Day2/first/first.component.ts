import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:"app-first",
    imports:[FormsModule],
    templateUrl:"./first.component.html",
    styleUrl:"./first.component.css"
})
export class FirstComponent{
    name:string="";
   
    resetName(){
        this.name="";
    }
}


