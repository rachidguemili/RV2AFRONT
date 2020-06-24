import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  model: Doctor = new Doctor();

  ngOnInit(): void {
  }

  onSubmit() {

    console.log(this.model);
  }

}
