import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MydataService } from './mydata.service';
import { HttpClientModule } from '@angular/common/http';
import { ExamComponent } from './exam/exam.component';
import { QuestionsComponent } from './questions/questions.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MyquestionComponent } from './myquestion/myquestion.component';
import { StartCompComponent } from './start-comp/start-comp.component';
import { StudentComponent } from './student/student.component';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { AdminComponent } from './admin/admin.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegistrationComponent,
    ExamComponent,
    QuestionsComponent,
    MyquestionComponent,
    StartCompComponent,
    StudentComponent,
    AdminComponent,
    DialogContentExampleDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [DataService, MydataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
