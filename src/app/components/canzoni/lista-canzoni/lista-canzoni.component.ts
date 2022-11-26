import { Component, OnInit } from '@angular/core';
import { CanzoneService } from 'src/app/services/canzone.service';
import { Canzone } from 'src/app/models/Canzone.model';

@Component({
  selector: 'app-lista-canzoni',
  templateUrl: './lista-canzoni.component.html',
  styleUrls: ['./lista-canzoni.component.scss']
})
export class ListaCanzoniComponent implements OnInit {

  canzoni:Canzone[] = [];
  pag= 1;
  canzoniPerPagina=4;
  pagingNumber= 0;


  constructor(private canzoneService:CanzoneService) { }

  ngOnInit(): void {
    this.onGetCanzoni();
  }

  onGetCanzoni(): void {
    this.canzoneService.autore.subscribe((res: any) =>{
      let autore = res;
      this.canzoneService.getCanzoni().subscribe({
        next: (res) =>
          {
            this.canzoni=res;
            this.canzoni=this.canzoni.filter(canzoniAutore => canzoniAutore.author === autore);
          },
        error:(e) =>
          {
            console.log(e)
          },
      })
    })

  }

  paginate(event: any) {
    event.page =event.page + 1;
   this.pag= event.page;
   console.log(this.canzoni);
   console.log(this.pag);
   console.log(event.pag);

}
}
