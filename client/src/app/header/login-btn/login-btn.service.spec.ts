import { TestBed } from '@angular/core/testing';

import { LoginBtnService } from './login-btn.service';

describe('LoginBtnService', () => {
  let service: LoginBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
