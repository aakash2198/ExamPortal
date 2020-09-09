import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MydataService {
  private myurl = 'http://jsonplaceholder.typicode.com/users';
  private mylocalurl = 'http://localhost:8080/getEmp';
  private addstudent = 'http://localhost:8080/addstudent';
  private stuLogin = 'http://localhost:8080/studentlogin';
  private getQuestions = 'http://localhost:8080/getAllQuestions?examId=';
  private postAns = 'http://localhost:8080/getAnswers?rollNumber=1&examId=1';
  private getMarks;
  private temp: string;
  body;
  myAns;

  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('http://localhost:8080/emp');
  }

  // tslint:disable-next-line: member-ordering
  postdata = '{ "name": "CA", "salary": 2000, "password": "ac" }';

  getHttpData() {
    return this.http.get('http://localhost:8080/emp');
  }

  getAdminApproval() {
    return this.http.get('http://localhost:8080/adminApproval');
  }

  getHttpStudentProfile() {
    return this.http.get('http://localhost:8080/studentProfileTrial');
  }

  getHttpGetExamData() {
    return this.http.get('http://localhost:8080/getExam');
  }

  getHttpQuestions(num) {
    this.getQuestions = this.getQuestions + num;
    return this.http.get(this.getQuestions);
  }

  getHttpMarks(str) {

    this.getMarks = 'http://localhost:8080/showDashboard?rollNumber=' + str;
    console.log(this.getMarks);
    return this.http.get(this.getMarks);
  }

  postHttpData(name, salary, password) {
    this.postdata =
      '{ "name":' +
      name +
      ', "salary":' +
      salary +
      ',"password":' +
      password +
      '}';
    console.log(this.postdata);
    return this.http.post(this.mylocalurl, this.postdata, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        accept: 'text/plain',
      }),
      responseType: 'text',
    });
  }

  postStudentData(rollNumber, username, password) {
    this.postdata =
      '{ "rollNumber":' +
      rollNumber +
      ', "username":"' +
      username +
      '","password":"' +
      password +
      '"}';
    console.log(this.postdata);
    return this.http.post(this.addstudent, this.postdata, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  postStudentLogin(rollNumber, password) {
    // this.postdata =
    //   '{ "rollNumber":'+
    //   rollNumber +
    //   ', "username":"' +
    //   username +
    //   '","password":"' +
    //   password +
    //   '"}';

    this.body = 'rollNumber=' + rollNumber + '&password=' + password;
    console.log(this.body);
    return this.http.post(this.stuLogin, this.body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
  }
  i = 0;
  postAnsMethod(str) {
    this.myAns = '{ "answers":' + JSON.stringify(str) + '}';
    console.log(this.myAns);
    //console.log();
    return this.http.post(this.postAns, this.myAns, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
