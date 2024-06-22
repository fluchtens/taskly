import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, TaskCreatorComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  public tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.getTasks().subscribe({
      next: (tasks: Task[]) => {
        this.tasks = tasks;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
