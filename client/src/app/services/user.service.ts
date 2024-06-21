import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private user: BehaviorSubject<User | null | undefined> = new BehaviorSubject<
    User | null | undefined
  >(undefined);

  getUser(): Observable<User | null | undefined> {
    return this.user.asObservable();
  }

  setUser(user: User | null | undefined) {
    this.user.next(user);
  }

  isLoggedIn(): boolean {
    return this.user !== null && this.user !== undefined;
  }
}
