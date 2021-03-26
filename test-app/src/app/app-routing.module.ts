import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostComponent } from 'angular-lab/test-app/src/app/user/list-post/list-post.component';
import { UserFormComponent } from 'angular-lab/test-app/src/app/user/user-form/user-form.component';

const routes: Routes = [
  {
    path: "Form", component: UserFormComponent
  },

  {
    path: "List", component: ListPostComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
