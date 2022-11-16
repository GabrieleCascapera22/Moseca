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
  constructor(
    private canzoneService: CanzoneService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.onGetCategory();
    this.ongetCazoni();
  }

  ongetCazoni():void{
    this.canzoneService.getCanzoni().subscribe({
      next:(res)=>{this.canzoni=res;
        if(this.wantedCategory)
        {
          this.canzoniFilter=this.canzoni.filter((canzone)=>canzone.category===this.wantedCategory);
        }
      },

      error:(error)=>{console.error(error)},
    })
  }

  onGetCategory(){
    this.activatedRoute.params.subscribe((urlParams) =>{
    this.wantedCategory=urlParams['category'];
    })
  }
}
