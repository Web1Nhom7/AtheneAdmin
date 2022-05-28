import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassManageService } from '../service/class-manage.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  selectedId: any;
  classManages:any;
  errMessage: string=""
  constructor(private _service: ClassManageService, private _activatedRouter: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.getClass();
    this._activatedRouter.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null){
          this.selectedId= id;
        }
      }
    )
  }
  getClass(){
    this._service.getClass().subscribe({
      next: data => this.classManages=data,
      error: err=> this.errMessage=err
    })
  }

  goBack(): void {
    this._router.navigate(['/class-manager', { id: this.selectedId }])
  }
}
