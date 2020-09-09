import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MydataService } from '../mydata.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

interface Exam {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  rollNum;
  Marks;
  variable;
  exams: Exam[] = [];
  selectedValue;
  constructor(
    private data: DataService,
    private myservice: MydataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rollNum = this.data.getNumber();

    this.myservice.getHttpMarks(this.rollNum).subscribe((data) => {
      this.Marks = Array.from(Object.keys(data), (k) => data[k]);
      // this.question = Array.from(this.questions.keys(data).map(key => data[key]));
      console.log(this.Marks);

      // this.data = this.userdata;
    });

    this.myservice.getHttpGetExamData().subscribe((data) => {
      this.exams = Array.from(Object.keys(data), (k) => data[k]);
      // this.question = Array.from(this.questions.keys(data).map(key => data[key]));
      console.log(this.exams);

      // this.data = this.userdata;
    });
  }

  // tslint:disable-next-line: typedef
  myFunc() {
    // console.log("hey");
    // console.log(this.selectedValue);
    this.data.setExamId(this.selectedValue);
    this.variable = this.data.getExamId();
    // console.log(this.data.getExamId());
    this.router.navigate(['/myquestions']);
  }
}
