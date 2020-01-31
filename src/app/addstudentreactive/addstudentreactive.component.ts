import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface User {
 
  fullName: string;
  lastName: string;
  phoneno: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-addstudentreactive',
  templateUrl: './addstudentreactive.component.html',
  styleUrls: ['./addstudentreactive.component.css']
})
export class AddstudentreactiveComponent implements OnInit {
  user: FormGroup;
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.user = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneno: ['', [Validators.required, Validators.pattern("[789][0-9]{9}")]],
      email: ['', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]],
      address: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', [Validators.required ]]
    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

 

}
