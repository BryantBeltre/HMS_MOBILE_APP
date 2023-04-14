import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsAPIService {

  constructor(public http: HttpClient) { }
  key = '7a7763044da84524b19b43bf54e2b7a8';
  pais = 'mx';
  url = `https://newsapi.org/v2/everything?q=all&language=es&apiKey=${this.key}`;

  getnews(): Observable<any> {

    return this.http.get<any>(this.url);

  }
}
