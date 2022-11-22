import { Canzone } from './../../models/Canzone.model';
import { Component, OnInit,Input } from '@angular/core';
import { CanzoneService } from 'src/app/services/canzone.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router:Router
    ) { }

  ngOnInit(): void {
    this.onGetCategory();


  }

  onGetCategory(){
    this.activatedRoute.params.subscribe((urlParams) =>{
    this.wantedCategory=urlParams['category'];

      this.canzoneService.getCanzoni().subscribe({
        next:(res)=>{this.canzoni=res;

          if(this.wantedCategory)
          {
            this.canzoniFilter=this.canzoni.filter((canzone)=>canzone.category===this.wantedCategory);
            this.pagine(this.canzoniFilter);

          }else{
            this.pagine(this.canzoni);
          }
        },

        error:(error)=>{console.error(error)},
      })
    })
  }

  pagine(canzoni:Canzone[]){
    let tot;
    if(canzoni){
      tot =canzoni.length;
    }
    this.pag=1;
    this.pagingNumber=0;
    if(this.wantedCategory === "pop")
    {
      this.pagingNumber=Math.floor(tot/this.canzoniPerPagina/4);
    }else{
      this.pagingNumber= Math.ceil(tot/this.canzoniPerPagina/4);
    }

  }

}
