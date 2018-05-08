import { LoginComponent } from './../components/login/login.component';
import { QuestionComponent } from './../components/question/question.component';
import { ProfileComponent } from './../components/profile/profile.component';
import { DetailsComponent } from './../components/details/details.component';
import { BloodPresureComponent } from './../components/blood-presure/blood-presure.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'callback', redirectTo: 'profile'
    },
    {
        path: 'profile',
        children: [
            {
                path: '',
                component: ProfileComponent,
            },
            {
                path: 'details',
                children: [
                    {
                        path: '',
                        component: DetailsComponent,
                    },
                    {
                        path: 'blood-presure',
                        component: BloodPresureComponent,
                    },
                    {
                        path: 'questions',
                        component: QuestionComponent
                    }
            ]
            }
        ]
    },
];

export const routing = RouterModule.forRoot(routes);
