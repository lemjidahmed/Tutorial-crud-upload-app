import { TestBed } from '@angular/core/testing';

import { AddUploadService } from './add-upload.service';

describe('AddUploadService', () => {
  let service: AddUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
