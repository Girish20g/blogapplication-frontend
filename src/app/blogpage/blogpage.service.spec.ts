import { TestBed } from '@angular/core/testing';

import { BlogpageService } from './blogpage.service';

describe('BlogpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogpageService = TestBed.get(BlogpageService);
    expect(service).toBeTruthy();
  });
});
