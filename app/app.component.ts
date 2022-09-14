import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  headerTitle: string = 'Header Title';

  HeaderId: string = 'testId';

  hasError: boolean = true;
  isspecial = true;

  setofClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'type-special': this.isspecial,
  };

  setofstyles = {
    color: 'green',
    fontStyle: 'italic',
  };

  logmsg() {
    console.log('Hello from componet header');
  }
}
