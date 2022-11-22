import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Canzone } from 'src/app/models/Canzone.model';
import { CanzoneService } from 'src/app/services/canzone.service';


@Component({
  selector: 'app-testo',
  templateUrl: './testo.component.html',
  styleUrls: ['./testo.component.scss']
})
export class TestoComponent implements OnInit {
  canzone : Canzone;
  constructor(
    private canzoneService: CanzoneService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetCanzone();
  }

  onGetCanzone(): void{
    const id = String(this.ActivatedRoute.snapshot.paramMap.get('_id'));
    this.canzoneService.getCanzone(id).subscribe({
      next:(res) =>{this.canzone=res},
      error :(e) =>{console.error(e)}
    })
  }

}
