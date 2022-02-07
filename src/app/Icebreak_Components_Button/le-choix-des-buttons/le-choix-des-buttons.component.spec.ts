import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeChoixDesButtonsComponent } from './le-choix-des-buttons.component';

describe('LeChoixDesButtonsComponent', () => {
  let component: LeChoixDesButtonsComponent;
  let fixture: ComponentFixture<LeChoixDesButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeChoixDesButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeChoixDesButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
