import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DetailproviderService } from '../detailprovider.service';


@Component({
  selector: 'app-studentdetailinput',
  templateUrl: './studentdetailinput.component.html',
  styleUrls: ['./studentdetailinput.component.css'],
  inputs: ['x','setlimit']
})
export class StudentdetailinputComponent implements OnInit {

  public x: number;

  setlimit=false;
  setproceed=true;
  
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
      this.setproceed=false;
      //console.log(this.student_marks);

      
      this.bubblesort(this.student_name,this.student_marks);
    }
  }


  bubblesort(arr_name:any[], arr_marks:any[]){
    let swapped,i,temp,temp1;
    do{
      swapped=false;
      for(i=0;i<arr_marks.length;i++){

        if(arr_marks[i]<arr_marks[i+1]){

          temp=arr_marks[i];
          arr_marks[i]=arr_marks[i+1];
          arr_marks[i+1]=temp;

          temp1=arr_name[i];
          arr_name[i]=arr_name[i+1];
          arr_name[i+1]=temp1;

          swapped=true;
        }
      }
    }while(swapped);

    this.student_name=arr_name;
    this.student_marks=arr_marks;

    console.table(this.student_marks);
    console.table(this.student_name);
  }


  onSubmit(){

    if(this.studentform.get('name').value==null||this.studentform.get('name').value==""){
      alert("Provide a name")
      return false;
    }
    
    if(this.studentform.get('marks').value < 0||this.studentform.get('marks').value > 100||this.studentform.get('marks').value==null){
      alert("provide a valid input (0 - 100)");
      return false;
    }

    if(this.student_name.includes(this.studentform.get('name').value)==true){
      alert("duplicates are not allowed");
      return false;
    }
    
    this.student_name.push(this.studentform.get('name').value);
    this.student_marks.push(this.studentform.get('marks').value);

    
    this.checklimit();
    this.limit++;

    //console.log(this.student_name[this.limit-1]);
    //console.log(this.student_marks[this.limit-1]);

    //console.log(this.limit)
  }

  // get getval(){
  //   return this.x;
  // }



  constructor(private detail:DetailproviderService ) { 
    // this.setlimit=true;
  }

  ngOnInit() {
    // if(this.x>0){
    //   this.setlimit=true;
    // }
  }

  onContinue(){
    //passing value to the service
    this.setproceed=true;

    this.detail.changeNo(this.x,this.student_marks,this.student_name);
    
  }

}
