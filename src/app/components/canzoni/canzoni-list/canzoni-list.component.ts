import { Component, OnInit } from '@angular/core';
import { Canzone } from 'src/app/models/Canzone.model';
import { CanzoneService } from 'src/app/services/canzone.service';
import { CardCanzoniComponent } from 'src/app/shared/card-canzoni/card-canzoni.component';


@Component({
  selector: 'app-canzoni-list',
  templateUrl: './canzoni-list.component.html',
  styleUrls: ['./canzoni-list.component.scss']
})
export class CanzoniListComponent implements OnInit {
  canzoni:Canzone[]=[];


  constructor(private canzoneService: CanzoneService) { }

  ngOnInit(): void {
    this.canzoneService.getCanzoni().subscribe({
      next:(res)=>{this.canzoni=res;},
      error:(error)=>{console.error(error)},
    })
  }

}
