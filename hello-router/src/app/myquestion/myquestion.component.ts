import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-myquestion',
  templateUrl: './myquestion.component.html',
  styleUrls: ['./myquestion.component.css'],
})

//  export class obj {
//   question:string;
//   option1:string;
//   option2:string;
//   option3:string;
//   option4:string;
//  }
export class MyquestionComponent implements OnInit {
  str: Array<string> = [];
  questions;
  que;
  op1;
  op2;
  op3;
  op4;
  ans = new FormControl();
  i = 0;
  //c:obj;
  element;
  btn: string;
  examId: number;

  constructor(private myservice: MydataService, private data: DataService) {}

  ngOnInit(): void {
    this.examId = this.data.getExamId();
    this.myservice.getHttpQuestions(this.examId).subscribe((data) => {
      this.questions = Array.from(Object.keys(data), (k) => data[k]);
      // this.question = Array.from(this.questions.keys(data).map(key => data[key]));
      console.log(this.questions);
      console.log(this.questions[1].question);
      this.i = 0;
      //this.data = this.userdata;
    });

    this.btn = 'Next';
  }

  typedKeys<T>(o: T): (keyof T)[] {
    // type cast should be safe because that's what really Object.keys() does
    return this.questions.keys(o) as (keyof T)[];
  }

  loadQuestions() {
    this.que = this.questions[this.i].question;
    this.op1 = this.questions[this.i].option1;
    this.op2 = this.questions[this.i].option2;
    this.op3 = this.questions[this.i].option3;
    this.op4 = this.questions[this.i].option4;
    this.i++;
    document.getElementById('subButton').style.display = 'block';
    document.getElementById('inVar').style.display = 'block';
  }

  getQuestion() {
    // this.typedKeys(this.c).forEach(k => console.log(this.c[k]));
    (document.getElementById('ans') as HTMLInputElement).value = '';
    if (this.ans.value == null) {
      alert('Please write answer!');
      (document.getElementById('ans') as HTMLInputElement).focus();
    }
    var myans: string = this.ans.value;
    this.str.push(myans);

    if (this.i < this.questions.length) {
      if (this.i == this.questions.length - 1) {
        this.btn = 'Submit';
      }
      this.que = this.questions[this.i].question;
      this.op1 = this.questions[this.i].option1;
      this.op2 = this.questions[this.i].option2;
      this.op3 = this.questions[this.i].option3;
      this.op4 = this.questions[this.i].option4;
      this.i++;
    } else {
      this.que = 'All questions are completed';
      // this.element = document.getElementById('subButton') as HTMLInputElement;
      document.getElementById('subButton').style.display = 'none';
      document.getElementById('inVar').style.display = 'none';
      console.log(this.str);

      this.myservice.postAnsMethod(this.str).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
