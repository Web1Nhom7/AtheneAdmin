import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { NewClassComponent } from './new-class/new-class.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ClassManagermentComponent } from './class-managerment/class-managerment.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateWebsiteComponent } from './update-website/update-website.component';
import { NgModule } from '@angular/core';
import { TransationManagermentComponent } from './transation-managerment/transation-managerment.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { InforLearnerComponent } from './infor-learner/infor-learner.component';
import { InforTutorComponent } from './infor-tutor/infor-tutor.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
const routes: Routes = [
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'class-manager', component : ClassManagermentComponent
  },
  {
    path:'user-manager', component: UserManagementComponent
  },
  {
    path:'transation-managerment', component: TransationManagermentComponent
  },
  {
    path:'new-account', component: NewAccountComponent
  },
  {
    path:'new-class', component:NewClassComponent
  },
  {
    path:'update-blog', component: UpdateBlogComponent
  },
  {
    path:'update-blog/:id', component: BlogDetailComponent
  },
  {
    path:'update-website', component: UpdateWebsiteComponent
  },
  
  {
    path:'user-manager/info-learner/:id', component: InforLearnerComponent
  },
  {
    path:'user-manager/info-tutor/:id', component: InforTutorComponent
  },
  {
    path:'class-manager/:id', component : ClassDetailComponent
  },
  {
    path:'class-manager/info-learner/:id', component : InforLearnerComponent
  },  {
    path:'class-manager/info-tutor/:id', component : InforTutorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//Them component
export class AppRoutingModule { }
export const Routingcomonents={ClassManagermentComponent,
   NewAccountComponent, NewClassComponent,TransationManagermentComponent,
    UpdateBlogComponent,UpdateWebsiteComponent, UserManagementComponent,
  InforLearnerComponent,InforTutorComponent, ClassDetailComponent, DashboardComponent}
