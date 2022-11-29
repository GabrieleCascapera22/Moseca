import { PrimeNGConfig } from 'primeng/api';
import { Canzone } from './../../models/Canzone.model';
import { Component, OnInit } from '@angular/core';
import { CanzoneService } from 'src/app/services/canzone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Autore{
  nome:string;
}

@Component({
  selector: 'app-autori',
  templateUrl: './autori.component.html',
  styleUrls: ['./autori.component.scss']
})
export class AutoriComponent implements OnInit {

  canzoni:Canzone[];
  autori:Autore[]=[];



    autoreSelezionato: string;




  constructor(
    private canzoneService: CanzoneService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.onGetCanzoni();
    this.primengConfig.ripple = true;
  }






  onGetCanzoni(){
    this.activatedRoute.params.subscribe((urlParams) =>{
      this.canzoneService.getCanzoni().subscribe({
        next:(res)=>{
          this.canzoni=res;

          for(let i=0;i<this.canzoni.length;i++){
            if(this.autori.find((author) => this.controlloAutore(author.nome,this.canzoni.at(i).author)))
            {

            }else{
              let autore:Autore;
              autore={
                'nome':this.canzoni.at(i).author
              }
              this.autori.push(autore);
            }
          }

        },
        error:(error)=>{console.error(error)},
      })
    })

  }

  controlloAutore(autore:string,autoreDB:string){
    return autore === autoreDB;
  }


  goTo(event:any){
    this.canzoneService.autore.next(event.value.nome);
    this.router.navigate([`/canzoni/lista-canzoni/${event.value.nome}`]);
  }
}
