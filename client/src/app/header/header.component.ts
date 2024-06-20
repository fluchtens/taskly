import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  user: User | null = null;

  ngOnInit() {
    this.authService.getUserInfo().subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  handleLogin() {
    const apiUrl = 'http://127.0.0.1:8080/oauth2/authorization/github';
    window.location.href = apiUrl;
  }

  handleLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.user = null;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
