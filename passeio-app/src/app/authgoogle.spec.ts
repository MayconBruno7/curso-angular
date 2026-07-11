import { TestBed } from '@angular/core/testing';

import { Authgoogle } from './authgoogle';

describe('Authgoogle', () => {
  let service: Authgoogle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authgoogle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
