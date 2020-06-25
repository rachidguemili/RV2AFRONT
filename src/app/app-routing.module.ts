import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ChatComponent } from './pages/home/patient-list/chat/chat.component';
import { PatientDetailsComponent } from './pages/home/patient-list/patient-details/patient-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { TableComponent } from './pages/home/patient-list/table/table.component';



const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'login', component: RegisterComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'home', component: TableComponent},
  { path: 'details', component: PatientDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
