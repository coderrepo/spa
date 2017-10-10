import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpartialComponent } from './jobpartial.component';

describe('JobpartialComponent', () => {
  let component: JobpartialComponent;
  let fixture: ComponentFixture<JobpartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobpartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
