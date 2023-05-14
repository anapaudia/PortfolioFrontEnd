import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsskillsComponent } from './hsskills.component';

describe('HsskillsComponent', () => {
  let component: HsskillsComponent;
  let fixture: ComponentFixture<HsskillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HsskillsComponent]
    });
    fixture = TestBed.createComponent(HsskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
