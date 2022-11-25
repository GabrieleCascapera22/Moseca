import { Canzone } from './../../models/Canzone.model';
import { Component, OnInit } from '@angular/core';
import { CanzoneService } from 'src/app/services/canzone.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-autori',
  templateUrl: './autori.component.html',
  styleUrls: ['./autori.component.scss']
})
export class AutoriComponent implements OnInit {

  canzoni:Canzone[];
  autori:string[]=[];

  constructor(
    private canzoneService: CanzoneService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.onGetCategory();
  }

  onGetCategory(){
    this.activatedRoute.params.subscribe((urlParams) =>{
      this.canzoneService.getCanzoni().subscribe({
        next:(res)=>{
          this.canzoni=res;

          for(let i=0;i<this.canzoni.length;i++){
            if(this.autori.includes(this.canzoni.at(i).author))
            {

            }else{
              this.autori.push(this.canzoni.at(i).author);
            }
          }
        },
        error:(error)=>{console.error(error)},
      })
    })

  }

}
