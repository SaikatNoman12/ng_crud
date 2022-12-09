import { User } from './../interface/user.modal';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserspracticeService } from '../app-service/userspractice.service';

@Component({
  selector: 'app-manage-user-practice',
  templateUrl: './manage-user-practice.component.html',
  styleUrls: ['./manage-user-practice.component.scss']
})
export class ManageUserPracticeComponent implements OnInit {

  myRecForm!: FormGroup;

  usersPractice:any[] = [];

  constructor(
    private _serverService: UserspracticeService
  ) { }

  ngOnInit(): void {
    this.myRecForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'technology': new FormControl(null, [Validators.required])
    });
  }

  // use for short validation:-
  get fc() {
    return this.myRecForm.controls;
  }

  myRecFromSubmit() {


    if (this.fc?.['name']?.value === null || this.fc?.['name']?.value === '' && this.fc?.['technology']?.value === null || this.fc?.['technology']?.value === '') {
      alert('please enter all input value!');
    }
    else if(this.fc?.['name']?.value === null || this.fc?.['name']?.value === ''){
      alert('Please enter name input value!');
    }
    else if(this.fc?.['technology'].value === null || this.fc?.['technology']?.value === ''){
      alert('Please enter technology input value!');
    }
    else {
      const data: User = this.myRecForm.value;
      this.usersPractice.push(data);
      this._serverService.onSetData(data).subscribe(
        (res) => {

         },
        (err) => { }
      );
      this.myRecForm.reset();
      console.log(this.myRecForm);

    }

  }

}
