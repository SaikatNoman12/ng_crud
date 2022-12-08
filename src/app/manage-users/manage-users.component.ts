import { UserService } from './../app-service/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../interface/user.modal';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  @ViewChild('templateForm') templateForm!: NgForm

  // user component title:-
  userTitle: any;
  spinnerTitle: boolean = false;

  users: any[] = [];

  constructor(
    private _userSer: UserService
  ) { }




  ngOnInit(): void {
    this.onGetUserTitle();
  }


  onGetUserTitle() {
    this.spinnerTitle = true;
    this._userSer.onGetTitle().subscribe(
      (res: any) => {

        if (res === null) {
          this.userTitle = 'Ux Users'
        }
        else {
          const data = JSON.stringify(res);
          this.userTitle = JSON.parse(data);

        }
        this.spinnerTitle = false;
      },
      (err: any) => {

      }
    );
  }

  submitFormData(userData: User) {
    if ((this.templateForm.value.name === '' && this.templateForm.value.technology === '') || (this.templateForm.value.name === null && this.templateForm.value.technology === null)) {
      alert('Enter all input field!');
    }
    else if (this.templateForm.value.name === null || this.templateForm.value.name === '') {
      alert('Enter name input field!');
    }
    else if (this.templateForm.value.technology === null || this.templateForm.value.technology === '') {
      alert('Enter technology input field!');
    }
    else {
      this.users.push(userData);
      this.templateForm.reset();
    }
  }


}
