import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';

import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './registration/listusers.component';
import { AddTimesheetComponent } from './timesheet/addtimesheet.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'User/AddUser', component: RegistrationComponent },
  { path: 'User/Listusers', component: ListUserComponent },
  { path: 'Timesheet/add', component: AddTimesheetComponent },
  { path: 'Timesheet/AddTimesheet', component: AppComponent },
  { path: '', redirectTo: 'User/AddUser', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent, RegistrationComponent, ListUserComponent,
    AddTimesheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

