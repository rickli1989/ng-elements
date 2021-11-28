import { TestBed } from '@angular/core/testing';

import { ComponentstwoService } from './componentstwo.service';

describe('ComponentstwoService', () => {
  let service: ComponentstwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentstwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
