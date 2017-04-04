import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ThanksComponent } from './thanks/thanks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [HomeComponent, SignupComponent ,ThanksComponent]
})
export class AppComponent {
  title = 'My First Angular App!';
}
