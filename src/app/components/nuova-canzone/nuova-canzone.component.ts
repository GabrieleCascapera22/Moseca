import { Canzone } from './../../models/Canzone.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanzoneService } from 'src/app/services/canzone.service';

@Component({
  selector: 'app-nuova-canzone',
  templateUrl: './nuova-canzone.component.html',
  styleUrls: ['./nuova-canzone.component.scss']
})
export class NuovaCanzoneComponent implements OnInit {


  form = new FormGroup(
    {
      author: new FormControl ('', [Validators.required]),
      title: new FormControl ('', [Validators.required]),
      text: new FormControl ('', [Validators.required]),
      image: new FormControl ('', [Validators.required]),
      category: new FormControl (''),
      published: new FormControl ('')
    }
  );

  modal:boolean;





  constructor(private canzoneService: CanzoneService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
    const canzone= this.form.value;
    this.canzoneService.postCanzone(canzone).subscribe();
    this.modal=true;
  }

}
