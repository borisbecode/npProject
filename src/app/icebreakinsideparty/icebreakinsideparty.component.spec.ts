import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcebreakinsidepartyComponent } from './icebreakinsideparty.component';

describe('IcebreakinsidepartyComponent', () => {
  let component: IcebreakinsidepartyComponent;
  let fixture: ComponentFixture<IcebreakinsidepartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcebreakinsidepartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcebreakinsidepartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
