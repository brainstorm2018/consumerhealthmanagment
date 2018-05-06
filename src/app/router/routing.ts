import { LoginComponent } from './../components/login/login.component';
import { QuestionComponent } from './../components/question/question.component';
import { ProfileComponent } from './../components/profile/profile.component';
import { DetailsComponent } from './../components/profile/details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: 'details',
            component: DetailsComponent
          }
        ]
    },
    {
        path: 'question',
        component: QuestionComponent
    }];

export const routing = RouterModule.forRoot(routes);
