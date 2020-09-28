import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DemoMaterialModule } from 'src/app/shared/modules/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [LandingPageComponent ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
    DemoMaterialModule,
    FlexLayoutModule,
    CarouselModule,
    NgxMasonryModule
  ]
})
export class LandingPageModule { }
