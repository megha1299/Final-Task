import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../api/service.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component {
  constructor(private api: ServiceService, private route: Router){}

  logout(){
    this.api.logout();
    this.route.navigate(['/login']);
  }
}
