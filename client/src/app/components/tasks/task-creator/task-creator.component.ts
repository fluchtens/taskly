import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskCreatorService } from './task-creator.service';

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-creator.component.html',
})
export class TaskCreatorComponent {
  constructor(private taskCreatorService: TaskCreatorService) {}

  showModal = false;
  taskDescription: string = '';
  taskExecutionTime: string = '';
  errorMessage: string = '';

  toggleModal() {
    this.showModal = !this.showModal;
  }

  closeModal() {
    this.showModal = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const form = document.getElementById('task-creator-form');

    if (form && !form.contains(target)) {
      this.showModal = false;
      this.taskDescription = '';
      this.taskExecutionTime = '';
      this.errorMessage = '';
    }
  }

  createTask() {
    if (!this.taskDescription || !this.taskExecutionTime) {
      return;
    }

    this.taskCreatorService
      .createTask(this.taskDescription, this.taskExecutionTime)
      .subscribe({
        next: (data) => {
          console.log('next', data);
          this.closeModal();
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }
}
