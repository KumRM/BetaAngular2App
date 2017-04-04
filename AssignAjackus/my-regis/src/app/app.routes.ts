import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ThanksComponent } from './thanks/thanks.component';
import { Routes, RouterModule } from '@angular/router';

const My_Routes: Routes = [
    { path: '', component : HomeComponent },
    { path: 'signup', component : SignupComponent },
    { path: 'thanks', component : ThanksComponent }
];

export const routing = RouterModule.forRoot(My_Routes);