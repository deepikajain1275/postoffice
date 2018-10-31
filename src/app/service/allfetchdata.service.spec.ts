import { TestBed } from '@angular/core/testing';

import { AllfetchdataService } from './allfetchdata.service';

describe('AllfetchdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllfetchdataService = TestBed.get(AllfetchdataService);
    expect(service).toBeTruthy();
  });
});
