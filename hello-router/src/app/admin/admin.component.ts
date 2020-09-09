import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';

import { DialogContentExampleDialogComponent } from '../dialog-content-example-dialog/dialog-content-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private myservice: MydataService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  myFunc() {
    this.myservice.getAdminApproval().subscribe((data) => {
      // this.userdata = Array.from(Object.keys(data), (k) => data[k]);
      console.log(data);
    });
  }
  // tslint:disable-next-line: typedef
  myFunc2() {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

