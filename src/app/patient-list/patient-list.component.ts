import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
