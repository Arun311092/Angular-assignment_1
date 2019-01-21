import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailoutputComponent } from './studentdetailoutput.component';

describe('StudentdetailoutputComponent', () => {
  let component: StudentdetailoutputComponent;
  let fixture: ComponentFixture<StudentdetailoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdetailoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdetailoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
