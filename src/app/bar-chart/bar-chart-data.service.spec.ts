import { TestBed } from '@angular/core/testing';

import { BarChartDataService } from './bar-chart-data.service';

describe('BarChartDataService', () => {
  let service: BarChartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarChartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
