import { TestBed } from '@angular/core/testing';

import { TopChartService } from './topChart.service';

describe('TopChartService', () => {
  let service: TopChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
