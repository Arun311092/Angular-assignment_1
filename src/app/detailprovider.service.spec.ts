import { TestBed } from '@angular/core/testing';

import { DetailproviderService } from './detailprovider.service';

describe('DetailproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailproviderService = TestBed.get(DetailproviderService);
    expect(service).toBeTruthy();
  });
});
