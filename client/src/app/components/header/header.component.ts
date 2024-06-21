import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  user: User | null = null;
  showProfileMenu = false;

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

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
    const apiUrl = 'http://localhost:8080/oauth2/authorization/github';
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
