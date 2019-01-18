import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailinputComponent } from './studentdetailinput.component';

describe('StudentdetailinputComponent', () => {
  let component: StudentdetailinputComponent;
  let fixture: ComponentFixture<StudentdetailinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdetailinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdetailinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
