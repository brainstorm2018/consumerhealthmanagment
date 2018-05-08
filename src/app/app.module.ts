import { AuthenticationService } from './services/login/login.service';
import { MenutoggleService } from './services/menutoggle.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsComponent } from './components/details/details.component';
import { BloodPresureComponent } from './components/blood-presure/blood-presure.component';
import { QuestionComponent } from './components/question/question.component';
import { routing } from './router/routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    DetailsComponent,
    QuestionComponent,
    BloodPresureComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    MenutoggleService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
