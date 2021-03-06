import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageService } from '../service/manage.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private _service: ManageService, private _router: Router) { }
  name:any;
  selectedId: any;
learners: any;
tutors:any;
errMessage: string=""
  ngOnInit(): void {
    this.getLearner();
    this.getTutor();
  }
  getLearner(){
    this._service.getLearner().subscribe({
      next:data => this.learners=data,
      error : err=> this.errMessage=err
    })
   }
   getTutor(){
    this._service.getTutors().subscribe({
      next:data => this.tutors=data,
      error : err=> this.errMessage=err
    })
   }
   onSelectLearner(data:any):void{
    this._router.navigate(['/user-manager/info-learner', data.id])
  }

   onSelectTutor(data:any):void{
    this._router.navigate(['/user-manager/info-tutor', data.id])
  }
  isSelect(data:any){
    return data.id===this.selectedId;
  }

  key: string ='id';
  reverse: boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }

  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }
    else{
      this.learners = this.learners.filter((res: { name: string; }) =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }

  }

}
