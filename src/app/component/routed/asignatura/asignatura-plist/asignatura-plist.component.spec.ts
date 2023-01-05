import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaPlistComponent } from './asignatura-plist.component';

describe('AsignaturaPlistComponent', () => {
  let component: AsignaturaPlistComponent;
  let fixture: ComponentFixture<AsignaturaPlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturaPlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturaPlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
