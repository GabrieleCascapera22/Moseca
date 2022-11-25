import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import *as moment from 'moment';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  user: any;
  dataRegistrazione: any;
  dataUpdate:any;


  constructor(private userService:UserService) { }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) !=null){
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    this.userService.getUser(this.user.email).subscribe({
      next: (res) =>{
        this.user = res;
        this.dataRegistrazione = moment(this.user.createdAt).locale('it').format('dddd DD MMMM YYYY');
        this.dataUpdate = moment(this.user.updatedAt).locale('it').format('dddd DD MMMM YYYY')
      }
    })
  }

}
