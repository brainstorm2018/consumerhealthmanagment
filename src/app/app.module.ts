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
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular5-social-login';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('878271741260-drh5llrqetvk9dg6uefm6poluc0qi609.apps.googleusercontent.com')
        },
      ]
  );
  return config;
}


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
    routing,
    SocialLoginModule
  ],
  providers: [
    MenutoggleService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
