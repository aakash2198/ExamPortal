import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ExamComponent } from './exam/exam.component';
import { QuestionsComponent } from './questions/questions.component';
import { MyquestionComponent } from './myquestion/myquestion.component';
import { StartCompComponent } from './start-comp/start-comp.component';
import { StudentComponent } from './student/student.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'myquestions', component: MyquestionComponent },
  { path: 'start', component: StartCompComponent },
  { path: 'student', component: StudentComponent },
  { path: 'admin', component: AdminComponent },
  { path: '*', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
