import { MenutoggleService } from './services/menutoggle.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsComponent } from './components/profile/details/details.component';
import { QuestionComponent } from './components/question/question.component';
import { routing } from './router/routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    DetailsComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [MenutoggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
