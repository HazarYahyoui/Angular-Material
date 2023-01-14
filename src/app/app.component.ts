import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from '@angular/material/table';
// Data table
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
//



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  notifications = 0;
  showSpinner = false;
  selectedValue!: string;

  options: string[]=['Angular','React','Vue'];
  objectOptions=[
    { name: 'Angular'},
    { name: 'Angular Material'},
    { name: 'React'},
    { name: 'Vue'}
  ];

  myControl= new FormControl();
 filteredOptions!: Observable<string[]>;

 ngOnInit(){
  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  )
 }

 private _filter(value: string): string[]{
  const filterValue = value.toLowerCase();
  return this.options.filter(option => 
    option.toLowerCase().includes(filterValue));
 }

 displayFn(subject:any){
  return subject? subject.name : undefined
}

  loadData(){
    this.showSpinner=true;
    setTimeout(()=> {
     this.showSpinner=false
    }, 5000)
  }

  opened = false;

  logChange(index: any){
    console.log(index);
    
  }
  // DatePicker 
  // minDate = new Date();
  // maxDate = new Date(2023,0,10);

  // dateFilter = (date: any |null)  =>{
  //   const day = date.getDay();
  //   return day !== 0 && day!==6
  // }

  // Snackbar
  // constructor(private snackbar:MatSnackBar){}

  // openSnackBar(message: string , action: string | undefined){
  //   this.snackbar.open(message, action);
  // }

  // openSnackBar1(message: string , action: string ){
  //   let snackBarRef = this.snackbar.open(message, action, {duration:2000});
  //  snackBarRef.afterDismissed().subscribe(()=>{
  //   console.log('the snackBar was dismissed');
  //  });
  //  snackBarRef.onAction().subscribe(()=>{
  //   console.log('the snackbar action was triggered!');
  //  });
  // }

  // Dialog
  // constructor(public dialog: MatDialog){}
 
  // openDialog(){
  //   let dialogRef = this.dialog.open(DialogExampleComponent, {data:{name:'hazar'}});
  //   dialogRef.afterClosed().subscribe(result=>{
  //    console.log('Dialog result:',result);
     
  //   });
  // }

  // Data Table

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(){
    this.dataSource.sort  = this.sort;
  }
}

  

