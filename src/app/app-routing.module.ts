import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeparmentDetailComponent } from './deparment-detail/deparment-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'departments/:id', component:DeparmentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [DepartmentListComponent, EmployeeListComponent, DeparmentDetailComponent]