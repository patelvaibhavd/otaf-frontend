import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Shuffle from 'shufflejs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  pageLoad = false;
  private shuffleInstance: Shuffle;
  @ViewChild('shuffleContainer') private shuffleContainer: ElementRef;
  @ViewChild('shuffleSizer') private shuffleSizer: ElementRef;

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

  constructor() { }
  ngAfterViewInit() {
    setTimeout(() => {
      // Shuffle Masonry
      this.shuffleInstance = new Shuffle(this.shuffleContainer.nativeElement, {
        itemSelector: '.grid-item',
        sizer: this.shuffleSizer.nativeElement,
        buffer: 1,
      });
    }, 500);
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.pageLoad = true;

    }, 200);
  }
}
