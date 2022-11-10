import { Canzone } from './../../models/Canzone.model';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-canzoni',
  templateUrl: './card-canzoni.component.html',
  styleUrls: ['./card-canzoni.component.scss']
})
export class CardCanzoniComponent implements OnInit {
@Input() canzoni:Canzone[];
  constructor() { }

  ngOnInit(): void {
  }

}
