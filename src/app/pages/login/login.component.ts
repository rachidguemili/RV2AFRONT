import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  model: Doctor = new Doctor();

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.model.identifiant === 'toto') {
      this.router.navigate(['home']);
    } else {
      alert('Identifiants incorrects');
    }
  }
}
