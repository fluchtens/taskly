import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskCreatorService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8080';

  createTask(description: string, executionTime: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/task/create`,
      { description, executionTime },
      {
        withCredentials: true,
      }
    );
  }
}
