import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../api/service.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent {
  constructor(private api: ServiceService, private route: Router){}
  

  logout(){
    this.api.logout();
    this.route.navigate(['/login']);
  }
}