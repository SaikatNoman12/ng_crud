import { User } from './../interface/user.modal';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-user-practice',
  templateUrl: './manage-user-practice.component.html',
  styleUrls: ['./manage-user-practice.component.scss']
})
export class ManageUserPracticeComponent implements OnInit {

  myRecForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myRecForm = new FormGroup({
      'name':new FormControl(null, [Validators.required]),
      'technology':new FormControl(null, [Validators.required])
    });
  }

  // use for short validation:-
  get fc(){
    return this.myRecForm.controls;
  }

  myRecFromSubmit(){
    const data:User = this.myRecForm.value;
    
  }

}
