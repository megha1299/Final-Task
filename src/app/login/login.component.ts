import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../api/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm !: FormGroup
  username: string = '';
  password: any = '';

  constructor(private fb: FormBuilder, private api: ServiceService, private route: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('^([^0-9]*)$')])],
      password: ['', Validators.required]
    })
  }

  //login  function
  login(form: FormGroup) {

    this.username = form.value.username;
    this.password = form.value.password;
    this.api.login(this.username, this.password);
    if (this.username == 'admin') {
      this.route.navigate(['/hr']);
    }
    else {
      this.route.navigate(['/employee']);
    }
    

  }
}
