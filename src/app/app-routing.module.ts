import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

import { EmployeeComponent } from './employee/employee.component';
import { HrComponent } from './hr/hr.component';
import { HRdashboardComponent } from './hrdashboard/hrdashboard.component';
import { LeaveComponent } from './leave/leave.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
  {path: 'hr', component: HrComponent, canActivate: [AuthGuard]},
  {path: 'empdashboard', component: EmpdashboardComponent, },
  {path: 'hrdashboard', component: HRdashboardComponent,},
  {path: 'empdetails', component: EmpdetailsComponent,},
  {path: 'leave', component: LeaveComponent, },
  {path: '', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
