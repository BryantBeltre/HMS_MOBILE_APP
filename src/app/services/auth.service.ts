import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('jwToken')}`
  })
};
const httpOptions2 = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
    private http: HttpClient,) { }

  //Url Login Authtetification API
  url = 'https://localhost:44305/api/account/authenticate';

  //Url find by id API
  url2 = 'https://localhost:44305/api/account/findById?id=';

  //forget password API
  url3 = 'https://localhost:44305/api/account/forgotPassword';
  
  url4 = 'https://localhost:44305/api/account/resetPassword';

  //url citas
  url5 = 'https://localhost:44305/api/cita/add';

  //url especialidad
  url6= 'https://localhost:44305/api/especialidad/getAllWitRelation/Doctor';
  url7= 'https://localhost:44305/api/cita/getAllWitRelation/Doctor';

  //delete cita
  url8 = 'https://localhost:44305/api/cita/delete/' 

  auth(postData: any): Observable<any> {
    return this.http.post(this.url, postData);
  }
  
  forgetpassword(mail: string){
    return this.http.post(this.url3,JSON.stringify(mail),httpOptions2);
  }
  
  login(id: any): Observable<any> {
    return this.http.get(`${this.url2}${id}`, httpOptions);

  }

  resetpassword(postData: any){
    return this.http.post(this.url4, postData);

  }

  addAppoiments(postData: any){
    return this.http.post(this.url5, postData, httpOptions);
  }

  deleteappointment(id: any): Observable<any>{
    return this.http.delete(`${this.url8}${id}`, httpOptions);
  }

  getSpeciality(){
    return this.http.get(this.url6, httpOptions);
  }

  getcita(){
    return this.http.get(this.url7, httpOptions);
  }


}
