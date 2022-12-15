import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresPlistComponent } from './profesores-plist.component';

describe('ProfesoresPlistComponent', () => {
  let component: ProfesoresPlistComponent;
  let fixture: ComponentFixture<ProfesoresPlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresPlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesoresPlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
