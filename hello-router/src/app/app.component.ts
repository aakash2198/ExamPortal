import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-router';
  mymsg: string;

  constructor(private data: DataService) {}

  hello() {
    this.data.setTemp(this.mymsg);
  }

  onFormSubmit(data)
  {
    alert("this is"+data.name+" "+data.password);
  }
}
