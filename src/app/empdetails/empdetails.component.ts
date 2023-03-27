import { Component, ViewChild, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../api/service.service';
import { userModel } from './employee.model';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent {
 user : any[] =[];
 newUser : any = [];



  @ViewChild('fileInput') fileInput: any;

  formDetail !: FormGroup;
  users!: userModel[];
  displayUser!: userModel[];

  public displayAdd: boolean = true;
  public displayEdit: boolean = false;

  searchData = ''
  constructor(private api: ServiceService, private route: Router, private fb: FormBuilder) { }
  

  ngOnInit() {
    this.users = [];
    this.displayUser = this.users;




    this.formDetail = this.fb.group({
      id: ['', Validators.required],
      image: [''],
      name: ['', Validators.compose([Validators.required, Validators.pattern('^([^0-9]*)$')])],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      bloodgroup: ['', Validators.required],
      email: ['', ([Validators.required, Validators.minLength(17), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
      gender: [''],
      mobile: ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
      salary: ['', Validators.required],
      designation: ['', Validators.required],
      leave: ['']
    })
    this.api.getUser().subscribe((res) => {
      console.log(res);
      this.displayUser = this.users;
      this.users = res;
    })
  }


  getUser() {
    this.api.getUser().subscribe((res) => {
      console.log(res);
      this.users = res;
    })

  }

  // to access each controls

  public get id(): FormControl {
    return this.formDetail.get('id') as FormControl;
  }
  public get image(): FormControl {
    return this.formDetail.get('image') as FormControl;
  }

  public get name(): FormControl {
    return this.formDetail.get('name') as FormControl;
  }

  public get age(): FormControl {
    return this.formDetail.get('age') as FormControl;
  }

  public get dob(): FormControl {
    return this.formDetail.get('dob') as FormControl;
  }

  public get bloodgroup(): FormControl {
    return this.formDetail.get('bloodgroup') as FormControl;
  }

  public get email(): FormControl {
    return this.formDetail.get('email') as FormControl;
  }

  public get gender(): FormControl {
    return this.formDetail.get('gender') as FormControl;
  }

  public get mobile(): FormControl {
    return this.formDetail.get('mobile') as FormControl;
  }

  public get salary(): FormControl {
    return this.formDetail.get('salary') as FormControl;
  }

  public get designation(): FormControl {
    return this.formDetail.get('designation') as FormControl;
  }

  public get leave(): FormControl {
    return this.formDetail.get('leave') as FormControl;
  }


  addEmp() {
    this.displayAdd = true;
    this.displayEdit = false;


    let user: userModel = {
      id: this.id?.value,
      image: this.fileInput?.value,
      name: this.name?.value,
      age: this.age?.value,
      dob: this.dob?.value,
      bloodgroup: this.bloodgroup?.value,
      email: this.email?.value,
      gender: this.gender?.value,
      mobile: this.mobile?.value,
      salary: this.salary?.value,
      designation: this.designation?.value,
      leave: this.leave?.value

    }
    this.api.postUser(user).subscribe((res) => {
      console.log(res);
      this.formDetail.reset();

    });

  }

  deleteDetails(user: any) {
    if (confirm('Are you sure you want to delete this?'))
      this.api.deleteDetails(user.id).subscribe(() => {
        alert("Detail Deleted");
        this.getUser();
      })
  }

  edit(user: any) {
    this.displayEdit = true;
    this.displayAdd = false;
    this.formDetail.controls['id'].setValue(user.id);
    this.formDetail.controls['image'].setValue(user.fileInput);
    this.formDetail.controls['name'].setValue(user.name);
    this.formDetail.controls['age'].setValue(user.age);
    this.formDetail.controls['dob'].setValue(user.dob);
    this.formDetail.controls['bloodgroup'].setValue(user.bloodgroup);
    this.formDetail.controls['email'].setValue(user.email);
    this.formDetail.controls['gender'].setValue(user.gender);
    this.formDetail.controls['mobile'].setValue(user.mobile);
    this.formDetail.controls['salary'].setValue(user.salary);
    this.formDetail.controls['designation'].setValue(user.designation);
    this.formDetail.controls['leave'].setValue(user.leave);

  }

  update(user: any) {
let User = {
  id : this.id,
  image: this.image,
  name: this.name,
  age: this.age,
  dob: this.dob,
  bloodgroup: this.bloodgroup,
  email: this.email,
  gender: this.gender,
  mobile: this.mobile,
  salary: this.salary,
  designation: this.designation,
  leave: this.leave
}

    this.api.update(User).subscribe((res:any) => {
      console.log(res)
      this.formDetail.reset();
      this.getUser();
      alert('updated successfully')
    });
    this.newUser.push(user)
    this.newUser = this.user
    console.log(JSON.stringify(this.newUser))
  }


}
     

