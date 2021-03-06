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
  pclass="pmessage";
  pcolor = "black";
  subtitle = "Welcome to my page. Please use menus to navigate";

  dateVal: Date = new Date();

  handleUserFormClickEvent(event: any) {
    this.message = "Form is submitted by "+event;
  }
}