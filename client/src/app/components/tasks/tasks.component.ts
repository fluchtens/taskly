import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task/task.service';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, TaskCreatorComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  private taskSubscription: Subscription | undefined = undefined;
  public tasks: Task[] | null | undefined = undefined;
  public formattedDate: string | null = null;

  constructor(private taskService: TaskService, private datePipe: DatePipe) {
    this.formattedDate = '';
  }

  ngOnInit() {
    const today = new Date();
    this.formattedDate = this.datePipe.transform(today, 'EEEE d', 'en-US');

    this.taskSubscription = this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  ngOnDestroy(): void {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }
}
