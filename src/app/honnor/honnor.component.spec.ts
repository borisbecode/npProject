import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonnorComponent } from './honnor.component';

describe('HonnorComponent', () => {
  let component: HonnorComponent;
  let fixture: ComponentFixture<HonnorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonnorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HonnorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
