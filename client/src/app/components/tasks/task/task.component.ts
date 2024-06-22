import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
}
