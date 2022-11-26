import { Canzone } from './../../models/Canzone.model';
import { Component, OnInit,Input } from '@angular/core';
import { CanzoneService } from 'src/app/services/canzone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Event } from '@angular/router';

@Component({
  selector: 'app-card-canzoni',
  templateUrl: './card-canzoni.component.html',
  styleUrls: ['./card-canzoni.component.scss']
})
export class CardCanzoniComponent implements OnInit {
@Input() page:string;
wantedCategory:string;
canzoni:Canzone[]=[];
canzoniFilter:Canzone[]=[];

pag= 1;
canzoniPerPagina=4;
pagingNumber= 0;




constructor(
    private canzoneService: CanzoneService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private primengConfig: PrimeNGConfig
    ) { }

  ngOnInit(): void {
    this.onGetCategory();
    this.primengConfig.ripple = true;

  }

  onGetCategory(){
    this.activatedRoute.params.subscribe((urlParams) =>{
    this.wantedCategory=urlParams['category'];

      this.canzoneService.getCanzoni().subscribe({
        next:(res)=>{
          this.canzoni=res;
          if(this.wantedCategory)
          {
            this.canzoniFilter=this.canzoni.filter((canzone)=>canzone.category===this.wantedCategory);
          }
        },

        error:(error)=>{console.error(error)},
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
