import { Injectable } from '@angular/core';
import {Tutorial} from "../models/tutorial.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const baseUrl = 'http://localhost:8080/api/tutorials';
@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id:any): Observable<Tutorial>{
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);

  }

  create(data:any): Observable<any>{
    return this.http.post(baseUrl,data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  deleteAll():Observable<any>{
    return this.http.delete(baseUrl);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }


  findByTitle(title: string):Observable<any> {
    return this.http.get<any>(`${baseUrl}?title=${title}`);
  }
}
