import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersPlistComponent } from './teachers-plist.component';

describe('TeachersPlistComponent', () => {
  let component: TeachersPlistComponent;
  let fixture: ComponentFixture<TeachersPlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersPlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersPlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
