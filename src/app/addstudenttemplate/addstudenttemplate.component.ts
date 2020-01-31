import { Component, OnInit } from '@angular/core';
import { IUser } from '../components/shared/models/IUser';

@Component({
  selector: 'app-addstudenttemplate',
  templateUrl: './addstudenttemplate.component.html',
  styleUrls: ['./addstudenttemplate.component.css']
})
export class AddstudenttemplateComponent implements OnInit {
  user: IUser = {
    fullName: '',
    lastName: '',
    phoneno: '',
    email: '',
    address: '',
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f.value);
  }
}
