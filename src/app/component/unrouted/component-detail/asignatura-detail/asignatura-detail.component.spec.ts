import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaDetailComponent } from './asignatura-detail.component';

describe('AsignaturaDetailComponent', () => {
  let component: AsignaturaDetailComponent;
  let fixture: ComponentFixture<AsignaturaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
