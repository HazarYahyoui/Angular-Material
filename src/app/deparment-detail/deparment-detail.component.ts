import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-deparment-detail',
  templateUrl: './deparment-detail.component.html',
  styleUrls: ['./deparment-detail.component.css']
})
export class DeparmentDetailComponent implements OnInit{

  public departmentId: any ;
  constructor(private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = params.get('id');
      this.departmentId = id
    })

  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId])
  }

  goNext(){
    let nextId = this.departmentId ++ ;
    this.router.navigate(['/departments', nextId])
  }
}
