import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images =[
    {
      id:1,
      descizione:'maneskin'
    },
    {
      id:2,
      descizione:'eminem'
    },
    {
      id:3,
      descizione:'Ed Sheeran'
    },
    {
      id:4,
      descizione:'Andrea Bocelli'
    },
    {
      id:5,
      descizione:'Salmo'
    }
  ];

  percorso="../assets/images/carousel-";

  constructor() { }

  ngOnInit(): void {
  }

}
