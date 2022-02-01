import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmanagerComponent } from './uploadmanager.component';

describe('UploadmanagerComponent', () => {
  let component: UploadmanagerComponent;
  let fixture: ComponentFixture<UploadmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
