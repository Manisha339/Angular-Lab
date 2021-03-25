import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }
  @Input() parentData: string="this is child Data";
  @Output() clickEvent = new EventEmitter();
  allowParentData: boolean =true;
  allowParentData1: boolean =true;
  firstName: string="";
  lastName: string="";
  ngOnInit(): void {
  }
  
  handleFirstInput (event: any){
    console.log(event.target.value);
    this.firstName=event.target.value;
  }
  handleLastInput (event: any){
    console.log(event.target.value);
    this.lastName=event.target.value;
  }
  handleFormClick (event: any){
    console.log(event);
    this.clickEvent.emit(this.firstName+" "+this.lastName);
  }
}
