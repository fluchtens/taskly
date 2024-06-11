import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-creator.component.html',
})
export class TaskCreatorComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
