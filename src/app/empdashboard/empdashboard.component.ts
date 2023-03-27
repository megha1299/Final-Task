import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../api/service.service';
import { userModel } from '../empdashboard/profile.model';


@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.scss']
})
export class EmpdashboardComponent {
   @ViewChild('fileInput') fileInput: any;
   users!: userModel[];
   displayUser!: userModel[];
   public user: any;

    formValue!: FormGroup;
  newUser: any = [];
  
constructor(private api: ServiceService, private fb: FormBuilder){
  this.NgOnInit();
  
}

NgOnInit(){
  this.users= [];
  this.displayUser = this.users;
  this.getUser();

  this.formValue = this.fb.group({
    id: ['', Validators.required],
    image: [''],
    name: ['',Validators.compose([Validators.required, Validators.pattern('^([^0-9]*)$')])],
    age: ['', Validators.required],
    dob: ['', Validators.required],
    bloodgroup: ['', Validators.required],
    email: ['',([Validators.required, Validators.minLength(17), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
    gender: [''],
    mobile: ['',Validators.compose([Validators.required, Validators.maxLength(15)])],
    salary: ['', Validators.required],
    designation: ['', Validators.required],
    leave: ['']
  }),
  this.api.getUser().subscribe((res)=>{
    console.log(res);
    this.displayUser = this.users;
      this.users = res;
  })

}

getUser(){
  this.api.getUser().subscribe((res)=>{
    console.log(res);
    this.user =res;
  })
}

  // to access each controls

  public get id(): FormControl {
    return this.formValue.get('id') as FormControl;
  }
  public get image(): FormControl {
    return this.formValue.get('image') as FormControl;
  }

  public get name(): FormControl {
    return this.formValue.get('name') as FormControl;
  }

  public get age(): FormControl {
    return this.formValue.get('age') as FormControl;
  }

  public get dob(): FormControl {
    return this.formValue.get('dob') as FormControl;
  }

  public get bloodgroup(): FormControl {
    return this.formValue.get('bloodgroup') as FormControl;
  }

  public get email(): FormControl {
    return this.formValue.get('email') as FormControl;
  }

  public get gender(): FormControl {
    return this.formValue.get('gender') as FormControl;
  }

  public get mobile(): FormControl {
    return this.formValue.get('mobile') as FormControl;
  }

  public get salary(): FormControl {
    return this.formValue.get('salary') as FormControl;
  }

  public get designation(): FormControl {
    return this.formValue.get('designation') as FormControl;
  }

  public get leave(): FormControl {
    return this.formValue.get('leave') as FormControl;
  }

 
  

edit(user: any) {


  this.formValue.controls['id'].setValue(user.id);
  this.formValue.controls['image'].setValue(user.fileInput);
  this.formValue.controls['name'].setValue(user.name);
  this.formValue.controls['age'].setValue(user.age);
  this.formValue.controls['dob'].setValue(user.dob);
  this.formValue.controls['bloodgroup'].setValue(user.bloodgroup);
  this.formValue.controls['email'].setValue(user.email);
  this.formValue.controls['gender'].setValue(user.gender);
  this.formValue.controls['mobile'].setValue(user.mobile);
  this.formValue.controls['salary'].setValue(user.salary);
  this.formValue.controls['designation'].setValue(user.designation);
  this.formValue.controls['leave'].setValue(user.leave);

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
        this.formValue.reset();
        this.getUser();
        alert('updated successfully')
      });
      this.newUser.push(user)
      this.newUser = this.user
      console.log(JSON.stringify(this.newUser))
    }




}
