import { TestBed } from '@angular/core/testing';

import { GenerService } from './geners.service';

describe('GenerService', () => {
  let service: GenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
