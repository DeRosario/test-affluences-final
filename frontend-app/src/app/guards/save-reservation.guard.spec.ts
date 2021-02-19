import { TestBed } from '@angular/core/testing';

import { SaveReservationGuard } from './save-reservation.guard';

describe('SaveReservationGuard', () => {
  let guard: SaveReservationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SaveReservationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
