import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './api/employee.service';
import { ServiceService } from './api/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private api:ServiceService,private service: EmployeeService, private route: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
    let value = this.api.getData();
    let data = this.service.getValue();
    if(value || data){
      return true;
    }
    else{

      this.route.navigate(['/login']);
      return false;
    }

  }
  
}
