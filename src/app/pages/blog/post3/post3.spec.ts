import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post3 } from './post3';

describe('Post3', () => {
  let component: Post3;
  let fixture: ComponentFixture<Post3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Post3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
