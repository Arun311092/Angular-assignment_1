import { Injectable } from '@angular/core';
//import {  } from 'rxjs/BehaviorSubject';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailproviderService {

  s = new BehaviorSubject<number>(0);
  p = new BehaviorSubject<Array<number>>([0]);
  q = new BehaviorSubject<Array<string>>([""]);

  //t = this.s.asObservable();

  y:number;
  y1=[];
  y2=[];

  constructor() { }

  changeNo(x:number,x1=[],x2=[]){
      this.s.next(x);
      this.y=x;

      this.p.next(x1);
      this.q.next(x2);

      this.y1=x1;
      this.y2=x2;

      //console.table(this.y1);
  }

  getNos(){
    return this.y;
  }

  getNames(){
    return this.y2;
  }

  getMarks(){
    return this.y1;
  }
}
