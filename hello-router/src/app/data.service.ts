import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private temp: string;
  private rno: number;
  private examId: number;

  constructor() {}

  // tslint:disable-next-line: typedef
  getTemp() {
    return this.temp;
  }
  // tslint:disable-next-line: typedef
  setTemp(temp) {
    this.temp = temp;
  }
  // tslint:disable-next-line: typedef
  getNumber() {
    return this.rno;
  }

  // tslint:disable-next-line: typedef
  setNumber(rno) {
    this.rno = rno;
  }

  // tslint:disable-next-line: typedef
  getExamId() {
    return this.examId;
  }

  // tslint:disable-next-line: typedef
  setExamId(examId: number) {
    this.examId = examId;
  }

}
