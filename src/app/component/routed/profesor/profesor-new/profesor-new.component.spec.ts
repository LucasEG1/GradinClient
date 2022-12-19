import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorNewComponent } from './profesor-new.component';

describe('ProfesorNewComponent', () => {
  let component: ProfesorNewComponent;
  let fixture: ComponentFixture<ProfesorNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
