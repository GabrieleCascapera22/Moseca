import { CategoriaComponent } from './../../components/categoria/categoria.component';
import { Component, OnInit } from '@angular/core';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { faHeartMusicCameraBolt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CanzoneService } from 'src/app/services/canzone.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  casetta=faHeartMusicCameraBolt;
  utente=faCircleUser;
  lente=faSearch;
  musica=faMusic;
  penna=faPen;
  disco=faCompactDisc;
  isCollapsed = true;
  vinyl = faRecordVinyl;
  isCollapsedNav=true;

  user:any;
  ricerca:string;
  categoriaScelta:string;
  categorie=['pop','rap','trap','rock','lirica'];

  constructor(
    private router:Router,
    public authService: AuthService,
    private canzoneService:CanzoneService
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')!) !== null){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout(){
    this.authService.logOut();
    this.router.navigate(['home']);
  }

  onRicerca() {
    this.canzoneService.wantedCanzone.next(this.ricerca);
    this.router.navigate(['canzoni/risultato']);
  }

  goTo(event:any){
    this.router.navigate([`/categoria/${event.value}`]);
  }


}


