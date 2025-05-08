import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  imgsrc:string='Images/Day2/image1.avif';
  images = [
    'Images/Day2/image1.avif',
    'Images/Day2/image2.avif',
    'Images/Day2/image3.avif'
  ];
  currentIndex = 0;
  interval: any;

  next() {
    if(this.currentIndex==this.images.length-1){
      this.currentIndex=0;
    }
    else{
      this.currentIndex++;
    }
    this.imgsrc=this.images[this.currentIndex];
  }

  prev() {
    if(this.currentIndex==0)this.currentIndex=2;
    else this.currentIndex--;
    this.imgsrc=this.images[this.currentIndex];
  }

  startSlideshow() {
    this.stopSlideshow();
    this.interval = setInterval(() => this.next(), 2000);
  }

  stopSlideshow() {
    clearInterval(this.interval);
  }
}
