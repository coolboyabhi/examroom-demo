import { TestBed } from '@angular/core/testing';

import { TabDataService } from './tab-data.service';

describe('TabDataService', () => {
  let service: TabDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
