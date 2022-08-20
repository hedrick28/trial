import { TestBed } from '@angular/core/testing';

import { NxMyLibService } from './nx-my-lib.service';

describe('NxMyLibService', () => {
  let service: NxMyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NxMyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
