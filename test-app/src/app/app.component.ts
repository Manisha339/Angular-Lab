import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  data = "This is Parent of user Form";
  data1 = "This is Parent of list User";
  message = "Waiting for user to submit form";

  handleUserFormClickEvent(event: any) {
    this.message = "Form is submitted by "+event;
  }
}