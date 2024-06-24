import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  private tasks: BehaviorSubject<Task[] | null | undefined> =
    new BehaviorSubject<Task[] | null | undefined>(undefined);

  getTasks(): Observable<Task[] | null | undefined> {
    return this.tasks.asObservable();
  }

  setTasks(tasks: Task[] | null | undefined) {
    this.tasks.next(tasks);
  }
}
