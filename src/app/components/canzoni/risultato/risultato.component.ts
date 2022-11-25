import { Canzone } from 'src/app/models/Canzone.model';
import { Component, OnInit } from '@angular/core';
import { CanzoneService } from 'src/app/services/canzone.service';


@Component({
  selector: 'app-risultato',
  templateUrl: './risultato.component.html',
  styleUrls: ['./risultato.component.scss']
})
export class RisultatoComponent implements OnInit {

  canzoni:Canzone[];

  constructor(private canzoneService:CanzoneService) { }

  ngOnInit(): void {
    this.onGetCanzone();
  }


  onGetCanzone():void{
    this.canzoneService.wantedCanzone.subscribe((res:any) =>{
      let testo = res;
      this.canzoneService.searchCanzoni(testo).subscribe({
        next: (res) =>{this.canzoni=res},
        error:(e) =>{console.log(e)},
    })

    })

  }

}
