import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../customValidator';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    cognome: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/),Validators.required]),
    accetto: new FormControl('',[Validators.requiredTrue])

  })


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit():void{
    console.log(this.form.value);
  }
}
