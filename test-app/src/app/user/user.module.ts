import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormMapComponent } from './form-map/form-map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsernamecolorDirective } from './usernamecolor.directive';



@NgModule({
  declarations: [ListUserComponent, UserFormComponent, FormMapComponent, UsernamecolorDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ListUserComponent,UserFormComponent,FormMapComponent]
})
export class UserModule { }
