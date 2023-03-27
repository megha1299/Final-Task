import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  user ={
    username : '',
    password : ''
  }

  login(username: string, password: string){
    this.user.username = username;
    this.user.password = password;
    localStorage.setItem('currentUser', JSON.stringify(this.user));
  }
   
  public get loggedIn(): boolean{
    return (localStorage.getItem('currentUser') != null);
  }

  logout(){
    localStorage.removeItem('currentUser')
  }

  getValue(){
    let user = localStorage.getItem('currentUser')
    if(user == null){
      return false;
    }
    let valueObj = JSON.parse(user)
    let username = valueObj.username;
    let password = valueObj.password;
    if(username == "user" && password == "user"){
      return true;
    }else{
      return false;
    }
  }
}
