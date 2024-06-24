import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  private tasks: BehaviorSubject<Task[] | null | undefined> =
    new BehaviorSubject<Task[] | null | undefined>(undefined);
  private apiUrl = 'http://localhost:8080';

  getTasks(): Observable<Task[] | null | undefined> {
    return this.tasks.asObservable();
  }

  setTasks(tasks: Task[] | null | undefined): void {
    this.tasks.next(tasks);
  }

  private fetchAllTasks(): Observable<any> {
    const options = { withCredentials: true };
    return this.http.get(`${this.apiUrl}/task/all`, options);
  }

  updateTasks(): void {
    this.fetchAllTasks().subscribe({
      next: (tasks) => {
        this.setTasks(tasks);
      },
      error: () => {
        this.setTasks(null);
      },
    });
  }
}
