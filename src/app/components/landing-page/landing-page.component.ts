import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
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
    gutter: 0,
    percentPosition: true,
    itemSelector: '.card-image-action'
  };

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoad = true;
    }, 100);
  }

}
