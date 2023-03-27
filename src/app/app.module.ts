import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HRdashboardComponent } from './hrdashboard/hrdashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { HrComponent } from './hr/hr.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { LeaveComponent } from './leave/leave.component';
import { Header1Component } from './header1/header1.component';
import { SearchPipe } from './search.pipe';
import { TestInterceptor } from './test.interceptor';
import { ServiceService } from './api/service.service';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { Header2Component } from './header2/header2.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HRdashboardComponent,
    EmployeeComponent,
    EmpdashboardComponent,
    HrComponent,
    EmpdetailsComponent,
    LeaveComponent,
    Header1Component,
    SearchPipe,
    Header2Component,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    LoadingBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true
    },
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
