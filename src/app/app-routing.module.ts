import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { AddstudenttemplateComponent } from './addstudenttemplate/addstudenttemplate.component';
import { AddstudentreactiveComponent } from './addstudentreactive/addstudentreactive.component';
import { JsonDataDisplayComponent } from './json-data-display/json-data-display.component';
const routes: Routes = [
  { path: '', component: StudentdetailsComponent },
  { path: 'studentdetails', component: StudentdetailsComponent },
  { path: 'addstudenttemplate', component: AddstudenttemplateComponent},
  { path: 'addstudentreactive', component: AddstudentreactiveComponent},
  { path: 'displayjsondata', component: JsonDataDisplayComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentdetailsComponent,AddstudenttemplateComponent,AddstudentreactiveComponent,JsonDataDisplayComponent]
