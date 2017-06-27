import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs';
import {Http} from '@angular/http';
import 'rxjs';

@Injectable()
export class CommonServiceService {

  constructor(private http: Http) { }
getList():Observable<any>{
  return this.http.get("http://10.0.0.43:9000/getusers").map(res=>{
    return res.json();
    
  });
}
}
