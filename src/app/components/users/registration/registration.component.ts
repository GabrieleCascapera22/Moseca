
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../customValidator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 generi=['rap','rock','pop','trap','lirica'];

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    cognome: new FormControl('',[Validators.required]),
    categoriaPreferita: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/),Validators.required]),
    accetto: new FormControl('',[Validators.requiredTrue])
  })


  constructor(private userService:UserService,private router: Router) {}

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.form.value);
    const utente = {nome:this.form.value.name,cognome:this.form.value.cognome,email:this.form.value.email,categoriaPreferita:this.form.value.categoriaPreferita};
    this.userService.datiUtente.next(utente);
    this.router.navigate(['home']);
  }
}
