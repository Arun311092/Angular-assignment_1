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

  studentform = new FormGroup({
    name : new FormControl(),
    marks : new FormControl()
  });

  onSubmit(){
    console.log(this.studentform.get('name').value);
    console.log(this.studentform.get('marks').value);
  }

  constructor() { }

  ngOnInit() {
  }

}
