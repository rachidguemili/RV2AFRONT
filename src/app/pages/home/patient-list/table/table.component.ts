import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  lastname: string;
  active: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Bob', lastname: 'Dylan', active: true },
  { id: 2, name: 'Helium', lastname: 'Durand', active: true },
  { id: 3, name: 'Lithium', lastname: 'Pedro', active: false },
  { id: 4, name: 'Beryllium', lastname: 'Sifreddy', active: false },
  { id: 5, name: 'Boron', lastname: 'Sapiens', active: false },
  { id: 6, name: 'Carbon', lastname: 'Bernard', active: false },
  { id: 7, name: 'Nitrogen', lastname: 'Tyler', active: false },
  { id: 8, name: 'Oxygen', lastname: 'Rogers', active: false },
  { id: 9, name: 'Fluorine', lastname: 'Admas', active: false },
  { id: 10, name: 'Neon', lastname: 'Jacobs', active: false },
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
  displayedColumns: string[] = ['id', 'name', 'lastname', 'details'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
