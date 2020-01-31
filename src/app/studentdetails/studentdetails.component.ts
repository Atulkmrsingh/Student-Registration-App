import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonDataserviceService } from '../json-dataservice.service';
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  public name = "Atul";
  public email = "atusingh@teksystems.com";
  public phno = "7974858423";
  public mothersname = "AS";
  public fathersname = "SKS";
  public bvalue: boolean = true;

  constructor() { }

  ngOnInit() {
   

  }
  toggle() {
    this.bvalue = !this.bvalue;
  }
}
