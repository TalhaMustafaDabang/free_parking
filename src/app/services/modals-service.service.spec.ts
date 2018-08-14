import { TestBed, inject } from '@angular/core/testing';

import { ModalsServiceService } from './modals-service.service';

describe('ModalsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalsServiceService]
    });
  });

  it('should be created', inject([ModalsServiceService], (service: ModalsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
