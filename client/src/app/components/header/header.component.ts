import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private userSubscription: Subscription | undefined;
  user: User | null | undefined = undefined;
  showProfileMenu = false;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const button = document.getElementById('profile-menu-btn');
    const menu = document.getElementById('profile-menu');

    if (!button || !menu) {
      return;
    }

    if (!button.contains(target) && !menu.contains(target)) {
      this.showProfileMenu = false;
    }
  }

  handleLogin() {
    const apiUrl = 'http://localhost:8080/oauth2/authorization/github';
    window.location.href = apiUrl;
  }

  handleLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.userService.setUser(null);
      },
      error: (error) => {},
    });
  }
}
