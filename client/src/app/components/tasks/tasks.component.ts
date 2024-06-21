import { Component } from '@angular/core';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, TaskCreatorComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {}
