import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UsersService } from './services/users.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule
  ],
  providers: [
    UsersService,
    HttpClient
  ]
})
export class SharedModule {
}
