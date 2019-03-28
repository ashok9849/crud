import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,  AppRoutingModule ],
  declarations: [EmployeeComponent,AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
