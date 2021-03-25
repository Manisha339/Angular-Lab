import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormMapComponent } from './form-map/form-map.component';



@NgModule({
  declarations: [ListUserComponent, UserFormComponent, FormMapComponent],
  imports: [
    CommonModule
  ],
  exports: [ListUserComponent,UserFormComponent,FormMapComponent]
})
export class UserModule { }
