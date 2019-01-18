import { Component } from '@angular/core';
import { StudentdetailinputComponent } from './studentdetailinput/studentdetailinput.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stud_No:number = 0;
  setButton=false;
  
  acceptNo(x){
    this.stud_No=x;
    this.setButton=true;
    console.log(this.stud_No);
  }
}
