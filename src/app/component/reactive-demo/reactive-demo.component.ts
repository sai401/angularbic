import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-demo.component.html',
  styleUrls: ['./reactive-demo.component.scss']
})
export class ReactiveDemoComponent implements OnInit {
  registrationForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      email: new FormControl('jhon@gmail.com'),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      addressGroup: new FormGroup({
        address: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl('')
      })
    });
  }

  loadApiData() {
    this.registrationForm.patchValue({
      addressGroup: {
        address: 'Ameepet',
        state: 'Telangana',
        country: 'Hyderabad'
      }
    });
  }
}
