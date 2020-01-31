import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JsonDataserviceService {
  private jsonData = [];
  private api = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }
  getData(): Observable<IData[]> {
    return this.http.get<IData[]>(this.api);
  }
}

export interface IData {
  userId: string;
  id: number;
  title: string;
  body: string
}
