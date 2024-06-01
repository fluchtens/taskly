import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input({ required: true }) task!: string;
  @Input({ required: true }) hour!: string;
}
