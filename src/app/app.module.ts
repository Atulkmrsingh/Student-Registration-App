import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { AddstudenttemplateComponent } from './addstudenttemplate/addstudenttemplate.component';
import { AddstudentreactiveComponent } from './addstudentreactive/addstudentreactive.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { JsonDataDisplayComponent } from './json-data-display/json-data-display.component';
import { JsonDataserviceService } from './json-dataservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavComponent,
    FooterComponent,
    JsonDataDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [JsonDataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
