
import { Component, NgModule, OnInit } from '@angular/core';
// import { CarouselCaptionComponent, CarouselComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';
import { Carousel06Component } from '../../shared/carousel/carousel06.component';
// import { RouterLink } from '@angular/router';


@Component({
  selector: 'about',
  standalone: true,
  imports: [ Carousel06Component ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutComponent {

}

