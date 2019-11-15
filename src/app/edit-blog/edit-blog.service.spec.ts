import { TestBed } from '@angular/core/testing';

import { EditBlogService } from './edit-blog.service';

describe('EditBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditBlogService = TestBed.get(EditBlogService);
    expect(service).toBeTruthy();
  });
});
