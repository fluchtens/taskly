import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8080';

  updateTaskStatus(id: number) {
    const options = { withCredentials: true };
    return this.http.put(`${this.apiUrl}/task/${id}/status`, null, options);
  }
}
