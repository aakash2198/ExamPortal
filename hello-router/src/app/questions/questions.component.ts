import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';
import { FormControl, FormGroup, ValidatorFn, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question = new FormControl();
  option1 = new FormControl();
  option2 = new FormControl();
  option3 = new FormControl();
  option4 = new FormControl();
  lableoption1 = new FormControl();
  lableoption2 = new FormControl();
  lableoption3 = new FormControl();
  lableoption4 = new FormControl();
  myButton = new FormControl();
  form: FormGroup;

  data;
  userdata;
  thisIsMyForm: FormGroup;


   constructor(private myservice: MydataService,private formBuilder: FormBuilder) {
    this.myservice.getHttpQuestions(10).subscribe((data) => {

      this.userdata = Array.from(Object.keys(data), (k) => data[k]);
      console.log(this.userdata);
      //this.data = this.userdata;
    });


    this.thisIsMyForm = new FormGroup({
      formArrayName: this.formBuilder.array([])
    })

   // this.buildForm();
   }




  ngOnInit(): void {

  }

  buildForm() {
    const controlArray = this.thisIsMyForm.get('formArrayName') as FormArray;

    Object.keys(this.data).forEach((i) => {
      controlArray.push(
        this.formBuilder.group({
          question: new FormControl({ value: this.data[i].question, disabled: true }),
          option1: new FormControl({ value: this.data[i].option1, disabled: true }),
          option2: new FormControl({ value: this.data[i].option2, disabled: true }),
          option3: new FormControl({ value: this.data[i].option3, disabled: true }),
          option4: new FormControl({ value: this.data[i].option4, disabled: true })
        })
      )
    })

    console.log(controlArray.controls)

  }

  onSubmitAns(){
    console.log(this.thisIsMyForm.value)
    console.log(this.option1.value);
    console.log(this.option2.value);
    console.log(this.option3.value);
    console.log(this.option4.value);

    this.question = new FormControl();
    this.option1 = new FormControl();
    this.option2 = new FormControl();
    this.option3 = new FormControl();
    this.option4 = new FormControl();
    this.myButton = new FormControl();
    this.lableoption1 = new FormControl();
    this.lableoption2 = new FormControl();
    this.lableoption3 = new FormControl();
    this.lableoption4 = new FormControl();
  }

}
