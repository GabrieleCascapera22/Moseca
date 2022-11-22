import { Component, OnInit } from '@angular/core';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { faHeartMusicCameraBolt } from '@fortawesome/free-solid-svg-icons';

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



  constructor() { }

  ngOnInit(): void {
  }


}


