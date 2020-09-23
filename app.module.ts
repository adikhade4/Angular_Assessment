import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'; 
import { FormsModule } from '@angular/forms';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
