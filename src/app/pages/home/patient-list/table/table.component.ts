import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  name: string;
  lastname: string;
  active: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Bob', lastname: 'Dylan', active: true },
  { position: 2, name: 'Helium', lastname: 'Durand', active: true },
  { position: 3, name: 'Lithium', lastname: 'Pedro', active: false },
  { position: 4, name: 'Beryllium', lastname: 'Sifreddy', active: false },
  { position: 5, name: 'Boron', lastname: 'Sapiens', active: false },
  { position: 6, name: 'Carbon', lastname: 'Bernard', active: false },
  { position: 7, name: 'Nitrogen', lastname: 'Tyler', active: false },
  { position: 8, name: 'Oxygen', lastname: 'Rogers', active: false },
  { position: 9, name: 'Fluorine', lastname: 'Admas', active: false },
  { position: 10, name: 'Neon', lastname: 'Jacobs', active: false },
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'lastname', 'toggle'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggle(position) {
    // console.log(this.dataSource.filteredData);
    // this.dataSource.filteredData.map( data => {

    //   console.log(data);
    // });
    // this.dataSource.find( d=> d.position === position).active = !this.dataSource.find( d=> d.position === position).active;
  }
}
