
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nome:string;
  cognome:string;
  email:string;
  categoriaPreferita:string;


  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.riceviDatiUtente();
  }


  riceviDatiUtente(){

    this.userService.datiUtente.subscribe((res: any) =>{
    this.nome=res.nome;
    this.cognome=res.cognome;
    this.categoriaPreferita=res.categoriaPreferita;
    this.email=res.email;
    })
  }

  closeModal(){
    this.email='';
    this.nome='';
    this.cognome='';
    this.categoriaPreferita='';
  }
}
