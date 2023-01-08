import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorFinderComponent } from './profesor-finder.component';

describe('ProfesorFinderComponent', () => {
  let component: ProfesorFinderComponent;
  let fixture: ComponentFixture<ProfesorFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
