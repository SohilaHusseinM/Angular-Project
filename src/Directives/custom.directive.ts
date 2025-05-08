import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private stl:ElementRef) {
    stl.nativeElement.style.background="grey"
    stl.nativeElement.style.color="white"
    stl.nativeElement.style.height="20vh"
    stl.nativeElement.style.textAlign="center"
   }
   @HostListener('click') click(){
    this.stl.nativeElement.style.color="green"
   }
}
