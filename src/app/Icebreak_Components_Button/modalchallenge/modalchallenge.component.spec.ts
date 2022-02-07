import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalchallengeComponent } from './modalchallenge.component';

describe('ModalchallengeComponent', () => {
  let component: ModalchallengeComponent;
  let fixture: ComponentFixture<ModalchallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalchallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
