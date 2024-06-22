import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8080';

  getTasks(): Observable<any> {
    const options = { withCredentials: true };
    return this.http.get(`${this.apiUrl}/task/all`, options);
  }
}
