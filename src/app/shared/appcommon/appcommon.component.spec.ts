import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcommonComponent } from './appcommon.component';

describe('AppcommonComponent', () => {
  let component: AppcommonComponent;
  let fixture: ComponentFixture<AppcommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
