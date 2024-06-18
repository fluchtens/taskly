import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginBtnService } from './login-btn.service';

@Component({
  selector: 'app-login-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-btn.component.html',
})
export class LoginBtnComponent {
  data: any = [];
  errorMessage!: string;

  constructor(private data_service: LoginBtnService) {}

  ngOnInit() {
    this.data_service.getData().subscribe({
      next: (data) => {
        this.data = data;
        console.log(this.data);
      },
      error: (error) => {
        this.errorMessage = error;
        console.log(error);
      },
    });
  }
}
