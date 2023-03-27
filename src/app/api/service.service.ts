import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../empdetails/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http: HttpClient) { }

  admin={
    username: '',
    password: ''
  }
  
  login(username: string, password: string){
    this.admin.username = username;
    this.admin.password = password;
    localStorage.setItem('currentUser', JSON.stringify(this.admin));
  }

    public get loggedIn():boolean{
      return (localStorage.getItem('currentUser') != null);
    }

    logout(){
      localStorage.removeItem('currentUser');
    }

    getData(){
      let admin = localStorage.getItem('currentUser')
      if(admin == null){
        return false;
      }
      let dataObj = JSON.parse(admin)
      let username = dataObj.username;
      let password = dataObj.password;
      if(username == "admin" && password == "admin" ){
        return true;
      }else{
        return false;
      }
    }
    //todo
    getList(){
      return this.http.get('http://localhost:3000/todo');
    }

    //interview list
    getInterview(){
      return this.http.get('http://localhost:3000/interview');
    }
    //leave list
    getLeave(){
      return this.http.get('http://localhost:3000/leave');
    }

    getUser(){ 
      return this.http.get<userModel[]>('http://localhost:3000/user');
    }

    postUser(user: userModel){
      return this.http.post<userModel>('http://localhost:3000/user', user, {reportProgress: true});
    }

    update(user:any){
      return this.http.put<userModel>('http://localhost:3000/user', user)
    }

    deleteDetails(id:number){
      return this.http.delete('http://localhost:3000/user'+ '/' + id);
    }
}
 