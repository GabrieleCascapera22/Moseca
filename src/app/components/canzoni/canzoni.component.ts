import { Component, OnInit } from '@angular/core';
import { Canzone } from 'src/app/models/Canzone.model';
import { CanzoneService } from 'src/app/services/canzone.service';
import { CardCanzoniComponent } from 'src/app/shared/card-canzoni/card-canzoni.component';

@Component({
  selector: 'app-canzoni',
  templateUrl: './canzoni.component.html',
  styleUrls: ['./canzoni.component.scss']
})
export class CanzoniComponent implements OnInit {
  canzoni:Canzone[]=[];

  constructor(private canzoneService: CanzoneService) { }

  ngOnInit(): void {
    this.canzoneService.getCanzoni().subscribe({
      next:(res)=>{this.canzoni=res;},
      error:(error)=>{console.error(error)},
    })
  }

}
