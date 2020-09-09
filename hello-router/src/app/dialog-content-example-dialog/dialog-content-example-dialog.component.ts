import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.css']
})
export class DialogContentExampleDialogComponent implements OnInit {

  examName = new FormControl();
  passingMarks = new FormControl();
  totalMarks = new FormControl();
  // email = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line: typedef
  OnSubmitReg()
  {

  }
}
