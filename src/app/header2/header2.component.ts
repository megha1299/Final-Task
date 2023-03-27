import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../api/service.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss']
})
export class Header2Component {
  constructor(private service: ServiceService, private route: Router){}

  logout() {  
    this.service.logout();  
    this.route.navigate(['/login']);  
  } 
}
