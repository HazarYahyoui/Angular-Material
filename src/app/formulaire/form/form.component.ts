import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  constructor(private fb: FormBuilder){ }

    registrationForm = new FormGroup({
      userName:  new FormControl('', Validators.required),
      password:  new FormControl('', Validators.required),
      confirmPassword:  new FormControl('', Validators.required),
    });
  }
   

