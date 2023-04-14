import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuetiongameService {

  constructor(
    private http: HttpClient
  ) { }

  getQuestions(){
    return this.http.get('../../assets/files/questionGame.json').pipe(
      map((res: any)=>{
        return res.data;
      })
    );
  }
}
