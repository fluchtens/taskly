import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input({ required: true }) id: number = 0;
  @Input({ required: true }) task: string = '';
  @Input({ required: true }) hour: string = '';
  @Input({ required: true }) completed: boolean = false;

  constructor(private taskService: TaskService) {}

  updateTaskStatus() {
    this.taskService.updateTaskStatus(this.id).subscribe({
      next: () => {
        this.completed = !this.completed;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
