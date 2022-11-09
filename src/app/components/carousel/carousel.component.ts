import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images =[
    {
      id:1,
      descizione:'maneskin',
      cit:'Cos’è fare l’artista? Te ne hanno mai parlato? Di tutto quello che ho perso, che ho sacrificato; di non avere voce, restare senza fiato; di avere mille persone che aspettano un tuo sbaglio.',
    },
    {
      id:2,
      descizione:'eminem',
      cit:"Dico quello che voglio dire e faccio quello che voglio fare. Non c'è via di mezzo. Le persone ti ameranno per questo o ti odieranno per questo.",
    },
    {
      id:3,
      descizione:'Ed Sheeran',
      cit:"Sto pensando a come le persone si innamorano in modi misteriosi. Forse è tutto parte di un piano. Io mi innamoro di te ogni singolo giorno.",
    },
    {
      id:4,
      descizione:'Andrea Bocelli',
      cit:"C'è musica classica talmente bella da diventare popolare e leggera, e c'è musica leggera talmente bella da diventare classica. Quando la musica è bella è bella e basta.",
    },
    {
      id:5,
      descizione:'Salmo',
      cit:"Poi la mia passione è diventata professione | devozione, mani intrecciate come alla confessione | Ringrazierò la sorte per gentile concessione | è importante ciò che lasci, non la conclusione",
    }
  ];

  percorso="../assets/images/carousel-";

  constructor() { }

  ngOnInit(): void {
  }

}
