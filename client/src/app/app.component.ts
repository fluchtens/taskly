import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { User } from './interfaces/user.interface';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  title = 'taskly';
  private userSubscription: Subscription | undefined;
  user: User | null | undefined = undefined;

  ngOnInit() {
    this.authService.getUserInfo().subscribe({
      next: (data) => {
        this.userService.setUser(data);
      },
      error: () => {
        this.userService.setUser(null);
      },
    });

    this.userSubscription = this.userService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
