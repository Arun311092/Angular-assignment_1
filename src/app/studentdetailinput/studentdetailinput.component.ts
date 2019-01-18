import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentdetailinput',
  templateUrl: './studentdetailinput.component.html',
  styleUrls: ['./studentdetailinput.component.css'],
  inputs: ['x']
})
export class StudentdetailinputComponent implements OnInit {

  public x: number;

  

  constructor() { }

  ngOnInit() {
  }

}
