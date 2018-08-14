import { TestBed, inject } from '@angular/core/testing';

import { ReciptService } from './recipt.service';

describe('ReciptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReciptService]
    });
  });

  it('should be created', inject([ReciptService], (service: ReciptService) => {
    expect(service).toBeTruthy();
  }));
});
