import { Component } from '@angular/core';
import { LoginBtnComponent } from './login-btn/login-btn.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginBtnComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
