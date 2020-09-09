import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MydataService } from '../mydata.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  rollnumber = new FormControl();
  username = new FormControl();
  password = new FormControl();
  public isCheck;
  element;
  userdata;
  constructor(
    private myservice: MydataService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.element = document.getElementById(
      'exampleRadios1'
    ) as HTMLInputElement;
    this.isCheck = this.element.checked;
  }

  // tslint:disable-next-line: typedef
  public radioFun() {
    // var element = document.getElementById('exampleRadios1') as HTMLInputElement;
    this.isCheck = this.element.checked;
    if (this.isCheck) {
      document.getElementById('display1').style.display = 'block';
      document.getElementById('display2').style.display = 'none';
    } else {
      document.getElementById('display1').style.display = 'none';
      document.getElementById('display2').style.display = 'block';
    }
  }

  // tslint:disable-next-line: typedef
  public onSubmitLogin() {
    this.isCheck = this.element.checked;
    if (this.rollnumber.value == null && this.isCheck) {
      alert('Please fill the roll number!');
      (document.getElementById('rollno') as HTMLInputElement).focus();
    } else if (this.password.value == null) {
      alert('Please fill the password!');
      (document.getElementById('password') as HTMLInputElement).focus();
    }
    if (this.username.value == null && !this.isCheck) {
      alert('Please fill the username!');
      (document.getElementById('username') as HTMLInputElement).focus();
    } else if (this.password.value == null) {
      alert('Please fill the password!');
      (document.getElementById('password') as HTMLInputElement).focus();
    } else if (this.isCheck) {
      this.myservice
        .postStudentLogin(this.rollnumber.value, this.password.value)
        .subscribe((data) => {
          console.log(data);
          if (data === true) {
            this.data.setNumber(this.rollnumber.value);
            this.router.navigate(['/student']);
          } else {
            alert(
              'Login Unsuccessful. Please check your username or password!!'
            );
          }
        });

      // this.getDataAfter();
    } else {
      if (this.username.value === 'admin' && this.password.value === 'admin') {
        this.router.navigate(['/admin']);
      }
    }
    // else if(!this.isCheck)
    // {
    //   this.myservice.postStudentData(this.username.value,this.password.value).subscribe((data)=>{
    //     console.log(data);
    //   });
    // }
  }

  // tslint:disable-next-line: typedef
  getDataAfter() {
    this.myservice.getHttpStudentProfile().subscribe((data) => {
      // this.userdata = Array.from(Object.keys(data), (k) => data[k]);
      console.log(data);
    });
  }
}
