import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentDetailComponent } from './deparment-detail.component';

describe('DeparmentDetailComponent', () => {
  let component: DeparmentDetailComponent;
  let fixture: ComponentFixture<DeparmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparmentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
