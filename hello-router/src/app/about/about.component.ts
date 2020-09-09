import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  username = new FormControl();
  password = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  myOnSubmit() 
  {
    if(this.username.value==null)
    {
      alert("Please enter username and password");
    }

    alert(this.username.value+" "+this.password.value);
  }



}
