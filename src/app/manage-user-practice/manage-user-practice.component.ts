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
  usersPractice: any;

  updateData: boolean = false;
  userDataId: any;

  spinnerShow: boolean = false;

  constructor(
    private _serverService: UserspracticeService
  ) { }

  ngOnInit(): void {
    this.myRecForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'technology': new FormControl(null, [Validators.required])
    });

    this.myGetData();
  }

  // use for short validation:-
  get fc() {
    return this.myRecForm.controls;
  }

  // use set data:-
  myRecFromSubmit() {
    if (this.fc?.['name']?.value === null || this.fc?.['name']?.value === '' && this.fc?.['technology']?.value === null || this.fc?.['technology']?.value === '') {
      alert('please enter all input value!');
    }
    else if (this.fc?.['name']?.value === null || this.fc?.['name']?.value === '') {
      alert('Please enter name input value!');
    }
    else if (this.fc?.['technology'].value === null || this.fc?.['technology']?.value === '') {
      alert('Please enter technology input value!');
    }
    else {
      this.spinnerShow = true;
      const data: User = this.myRecForm.value;
      if (this.updateData) {
        this._serverService.onEditData(this.userDataId, data).subscribe(
          (res) => {
            this.myGetData();
            this.updateData = false;
            this.spinnerShow = false;
          },
          (err) => { }
        )
      }
      else {
        this._serverService.onSetData(data).subscribe(
          (res) => {
            if (res !== null) {
              this.myGetData();
              this.spinnerShow = false;
            }
          },
          (err) => { }
        );
      }
      this.myRecForm.reset();
    }
  }

  // use fetch data:-
  myGetData() {
    this.spinnerShow = true;
    this._serverService.onGetData().subscribe(
      res => {
        this.usersPractice = res;
        this.spinnerShow = false;
      }
    );
  }

  myEditData(userId: string, index: number) {
    this.updateData = true;

    this.userDataId = userId;

    const userData = this.usersPractice[index];
    this.myRecForm.setValue({
      'name': userData.name,
      'technology': userData.technology
    });
  }

  // use delete data:-
  myDeleteData(userId: any) {
    this._serverService.onDeleteData(userId).subscribe(
      (res) => {
        this.myGetData();
      },
      (err) => { }
    );
  }

}
