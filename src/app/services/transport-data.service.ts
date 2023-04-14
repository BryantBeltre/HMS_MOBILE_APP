import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransportDataService {

  constructor() { }
  private obejectSource = new BehaviorSubject<any>({});
  $getobjeto = this.obejectSource.asObservable();

  private obejectSource2 = new BehaviorSubject<any>({});
  $getobjeto2 = this.obejectSource2.asObservable();

  sendobjeto(data: any) {
    this.obejectSource.next(data);
  }


  sendobjeto2(data: any) {
    this.obejectSource2.next(data);
  }

}
