import { Component, OnInit } from '@angular/core';
import {StudentdetailinputComponent} from '../studentdetailinput/studentdetailinput.component';
import { DetailproviderService } from '../detailprovider.service';

@Component({
  selector: 'app-studentdetailoutput',
  templateUrl: './studentdetailoutput.component.html',
  styleUrls: ['./studentdetailoutput.component.css']
})
export class StudentdetailoutputComponent implements OnInit {

 
  public studNos;
  studNames=[];
  studMarks=[];
  a=[];
  b=[];
  c=false;

  constructor(private detail:DetailproviderService) {
    //console.log("hi from o/p const")
   }

  ngOnInit() {
    
  }

  onClick(top:number){
    this.studNos=this.detail.getNos();

    this.studMarks=this.detail.getMarks();
    this.studNames=this.detail.getNames();

    if(top < 1 || top > this.studNos)
    {
      alert('provide a valid input (1 - '+this.studNos+')');
      return false;
    }

    // console.log(this.studNos + " from detail o/p");
    // console.table(this.studMarks);
    // console.log("top "+top);

    this.a=this.studMarks.slice(0,top);
    this.b=this.studNames.slice(0,top);

    console.table(this.studMarks.slice(0,top));

    this.c=true;

  }

}
