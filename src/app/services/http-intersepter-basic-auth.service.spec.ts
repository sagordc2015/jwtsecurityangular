import { TestBed } from '@angular/core/testing';

import { HttpIntersepterBasicAuthService } from './http-intersepter-basic-auth.service';

describe('HttpIntersepterBasicAuthService', () => {
  let service: HttpIntersepterBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntersepterBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
