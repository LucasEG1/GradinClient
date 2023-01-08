import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaFinderComponent } from './asignatura-finder.component';

describe('AsignaturaFinderComponent', () => {
  let component: AsignaturaFinderComponent;
  let fixture: ComponentFixture<AsignaturaFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturaFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturaFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
