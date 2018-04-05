import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grader-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  foods = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
