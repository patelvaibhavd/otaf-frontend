import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit,AfterViewInit {
  pageLoad = false;

  // Slider options
  carouselOptions: OwlOptions = {
    loop: false,
    dots: false,
    autoWidth: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3,
        margin: 5,
      },
      768: {
        items: 4,
        margin: 5,
      },
      959: {
        items: 5,
        margin: 10,
      }
    },
    nav: false
  };

  // Masonry options
  public myOptions: NgxMasonryOptions = {
    gutter: 8,
    horizontalOrder: true,
    resize: true,
    itemSelector: '.grid-item',
  };

  constructor() { }
ngAfterViewInit(){
  setTimeout(() => {
    this.initCards();
  }, 5000);
}
  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoad = true;
    }, 200);
  }

  initCards(){
    const cardHeight = [];
    document.querySelectorAll('ngx-masonry > mat-card').forEach((element, i) => {
      cardHeight.push(document.querySelectorAll('ngx-masonry > mat-card')[i].clientHeight);
      // console.log(document.querySelectorAll('ngx-masonry > mat-card')[i].clientHeight, document.querySelectorAll('ngx-masonry > mat-card')[i]);
    });
    // cardHeight.reduce()
    console.log('cardHeight',cardHeight);
    
    var largest= 0;
    for (let i=0; i<=largest;i++){
        if (cardHeight[i]>largest) {
            var largest = cardHeight[i];
        }
    }
    let maxHeight = largest * 2;
    console.log(maxHeight, 'Max Height');

    const sum = cardHeight.reduce(function(a, b) {
      return a + b;
    }, 0);
    console.log('sum',sum)
    if (document.querySelector('ngx-masonry')){
      document.querySelector('ngx-masonry')['style'].height = `${maxHeight} px`;
      console.log(document.querySelector('ngx-masonry')['style'].height = `${maxHeight}px`);
      
    }
  }
}
