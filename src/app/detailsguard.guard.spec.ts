import { TestBed } from '@angular/core/testing';

import { DetailsguardGuard } from './detailsguard.guard';

describe('DetailsguardGuard', () => {
  let guard: DetailsguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetailsguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
