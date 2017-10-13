import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../environments/environment";

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getHotels(){
    this.http.get(environment.api_endpoint).subscribe((data) =>{
      return data.json();
    });
  }
}
