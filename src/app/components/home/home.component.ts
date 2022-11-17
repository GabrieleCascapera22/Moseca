
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
      localStorage.setItem("nome",res.nome);
      localStorage.setItem("cognome",res.cognome);
      localStorage.setItem("email",res.email);
      localStorage.setItem("categoriaPreferita",res.categoriaPreferita);
    })

    if(localStorage.getItem('nome'))
  {
    this.nome=localStorage.getItem('nome');
    this.cognome=localStorage.getItem('cognome');
    this.categoriaPreferita=localStorage.getItem('categoriaPreferita');
    this.email=localStorage.getItem('email');
  }
  }

  closeModal(){
    localStorage.removeItem("nome");
    localStorage.removeItem("cognome");
    localStorage.removeItem("email");
    localStorage.removeItem("categoriaPreferita");
    this.email='';
    this.nome='';
    this.cognome='';
    this.categoriaPreferita='';
  }
}
