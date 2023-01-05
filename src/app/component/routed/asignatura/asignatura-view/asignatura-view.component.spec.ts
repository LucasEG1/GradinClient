import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaViewComponent } from './asignatura-view.component';

describe('AsignaturaViewComponent', () => {
  let component: AsignaturaViewComponent;
  let fixture: ComponentFixture<AsignaturaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturaViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
