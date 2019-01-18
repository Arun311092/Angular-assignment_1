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
  a:any;
  b:any;
  
  public student_name =[];
  public student_marks =[];

  studentform = new FormGroup({
    name : new FormControl(),
    marks : new FormControl()
  });

  onSubmit(){
    this.a=this.studentform.get('name').value;
    this.b=this.studentform.get('marks').value

    this.student_name.push(this.a);
    this.student_marks.push(this.b);

    console.log(this.student_name[0]);
    console.log(this.student_marks[0]);
  }

  constructor() { }

  ngOnInit() {
  }

}
