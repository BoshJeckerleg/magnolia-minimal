import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsAreaComponent } from './cms-area.component';

describe('CmsAreaComponent', () => {
  let component: CmsAreaComponent;
  let fixture: ComponentFixture<CmsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
