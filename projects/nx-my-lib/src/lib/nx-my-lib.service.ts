import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NxMyLibService {
  getShow(arg0: number) {
    throw new Error('Method not implemented.');
  }
  

  private readonly apiRoot = "https://tvmaze.com"

  constructor(private http: HttpClient) { }

  getShowId(){
    return this.http.get('$(this.apiRoot)/shows/$(id)')
  }
}
