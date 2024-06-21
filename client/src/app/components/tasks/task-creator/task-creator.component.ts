import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-creator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-creator.component.html',
})
export class TaskCreatorComponent {
  showModal = false;
  taskDescription: string = '';
  taskExecutionTime: string = '';

  toggleModal() {
    this.showModal = !this.showModal;
  }

  closeModal() {
    this.showModal = false;
  }

  createTask() {
    console.log(this.taskDescription, this.taskExecutionTime);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const form = document.getElementById('task-creator-form');

    if (form && !form.contains(target)) {
      this.showModal = false;
      this.taskDescription = '';
      this.taskExecutionTime = '';
    }
  }
}
