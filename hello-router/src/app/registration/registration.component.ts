import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  rollnumber = new FormControl();
  username = new FormControl();
  password = new FormControl();
  checkbox1 = new FormControl();
  constructor(private myservice: MydataService) { }

  
  

  ngOnInit(): void {
  }

  OnSubmitReg(){
   // alert(this.rollnumber.value+" "+this.username.value+" "+this.password.value);

    if(this.rollnumber.value==null)
    {
      alert("Please fill the roll number!");
      (document.getElementById("rollnumber") as HTMLInputElement).focus();
    }
    else if(this.username.value == null)
    {
      alert("Please fill the username!");
      (document.getElementById("username") as HTMLInputElement).focus();
     

    }
    else if(this.password.value == null)
    {
      alert("Please fill the password!");
      (document.getElementById("password") as HTMLInputElement).focus();
    }
    else if(this.checkbox1.value == null)
    {
      alert("Please fill the checkbox!");
    }
    else{

        this.myservice.postStudentData(this.rollnumber.value,this.username.value,this.password.value).subscribe((data)=>{
          console.log(data);
        });

    }
  }

}
