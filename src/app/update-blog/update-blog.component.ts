import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../model/blog';
import { BlogService } from '../service/blog.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  selectedId: any;
  blogs: any;
  errMessage: string="";
  blog: Blog=new Blog();
 file:any=null;
    constructor(private _service: BlogService, private _toast:ToastrService , private _router: Router) { }
  
    ngOnInit(): void {
     this.getBlogs();

    }
    getBlogs(){
      this._service.getBlogs().subscribe({
        next: data => this.blogs=data,
        error: err=> this.errMessage=err
      })
    }
  onSelect(data:any):void{
    this._router.navigate(['/update-blog', data.id])
  }
  isSelect(data:any){
    return data.id===this.selectedId;
  }
  onChange(event:any){
    if(event.target.files.length>0){ // console.log("File info:", event.target.files[0])
      this.file=event.target.files[0];}
      else{
        this.file=null;
      }
   
  }
  submitData(form: NgForm){
 
    if(this.blog._id==""){
      this._service.postBlog(this.blog).subscribe(res=>{
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message ==="Success"){
          this._toast.success("Insert successfully!","Insert")
          this.getBlogs();
        } else{
          alert("Fail!")
        }
      })
    }
  }
 

}
  