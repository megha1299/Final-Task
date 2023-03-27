import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../api/employee.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent {

leaveform !: FormGroup;

user ={
  radioOptions : '',
  checkbox: '',
  startdate: '',
  enddate: '',
  reason: ''
}
  constructor(private service: EmployeeService, private route: Router, private fb: FormBuilder){}

  ngOnInit(){
    this.leaveform = this.fb.group({
      radioOptions: [''],
      checkbox: [''],
      startdate: [''],
      enddate: [''],
      reason: ['', Validators.required]
    })
  }

  apply(form: FormGroup){
    this.user.radioOptions = form.value.radioOptions;
    this.user.checkbox = form.value.checkbox;
    this.user.startdate = form.value.startdate;
    this.user.enddate = form.value.enddate;
    this.user.reason = form.value.reason;
    console.log(this.user);
    alert('Leave submitted Successfully');
    this.leaveform.reset();
  }

  logout() {  
    this.service.logout();  
    this.route.navigate(['/login']);  
  } 
}
