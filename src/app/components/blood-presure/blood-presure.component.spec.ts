import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodPresureComponent } from './blood-presure.component';

describe('BloodPresureComponent', () => {
  let component: BloodPresureComponent;
  let fixture: ComponentFixture<BloodPresureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodPresureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodPresureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
