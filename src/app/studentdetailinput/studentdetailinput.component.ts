import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-studentdetailinput',
  templateUrl: './studentdetailinput.component.html',
  styleUrls: ['./studentdetailinput.component.css'],
  inputs: ['x']
})
export class StudentdetailinputComponent implements OnInit {

  public x: number;
  setlimit=false;
  limit=1;

  public student_name =[];
  public student_marks =[];

  studentform = new FormGroup({
    name : new FormControl(),
    marks : new FormControl()
  });

  checklimit(){
    if(this.limit>=this.x){
      this.setlimit=true;
    
    }
  }

  onSubmit(){
    
    this.checklimit();

    this.student_name.push(this.studentform.get('name').value);
    this.student_marks.push(this.studentform.get('marks').value);

    console.log(this.student_name[this.limit-1]);
    console.log(this.student_marks[this.limit-1]);

    console.log(this.limit)
    this.limit++;
  }

  constructor() { }

  ngOnInit() {
  }

}
