import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder) {
    
   }
   userForm!: FormGroup;
  @Input() parentData: string="this is child Data";
  @Output() clickEvent = new EventEmitter();
  allowParentData: boolean =true;
  allowParentData1: boolean =true;
  formSubmitted: boolean=false;
  formControls: any;
  //firstName: string="";
  //lastName: string="";

  
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.formControls = this.userForm.controls;
  }
  //handleFirstInput (event: any){
    //console.log(event.target.value);
    //this.firstName=event.target.value;
  //}
  //handleLastInput (event: any){
    //console.log(event.target.value);
    //this.lastName=event.target.value;
  //}
  //handleFormClick (event: any){
    //console.log(event);
    //this.clickEvent.emit(this.firstName+" "+this.lastName);
  //
  handleFormSubmit() {
    this.formSubmitted = true;
    if (this.userForm.invalid) {
      return;
    } else {
      alert("Form submitted");
    }
  }
}