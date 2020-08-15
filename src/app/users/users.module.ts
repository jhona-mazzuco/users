import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserViewComponent } from './user-view/user-view.component';


const routes: Routes = [
  { path: '', component: UserViewComponent },
  { path: ':id', component: UserDetailsComponent }
];

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule {
}
