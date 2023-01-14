import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
 departments = [
  {"id":1, "name": "hazar"},
  {"id":2, "name": "afnen"}
 ]
 constructor(private router: Router) {}
 onSelect(department:any){
this.router.navigate(['/departments',department.id])
 }
}
