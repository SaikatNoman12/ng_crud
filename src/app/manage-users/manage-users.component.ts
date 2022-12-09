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

  users: any;
  spinnerUser: boolean = false;

  editItem: boolean = false;
  editItemId: any;

  constructor(
    private _userSer: UserService
  ) { }




  ngOnInit(): void {
    this.onGetUserTitle();
    // fetch server data:
    this.onFetchData();
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

      if (this.editItem) {
        this.templateForm.reset();
        this.editItem = false;
      }
    }
    else if (this.templateForm.value.name === null || this.templateForm.value.name === '') {
      alert('Enter name input field!');

      if (this.editItem) {
        this.templateForm.reset();
        this.editItem = false;
      }
    }
    else if (this.templateForm.value.technology === null || this.templateForm.value.technology === '') {
      alert('Enter technology input field!');

      if (this.editItem) {
        this.templateForm.reset();
        this.editItem = false;
      }

    }
    else {

      if (this.templateForm.valid) {

        if (this.editItem) {
          this._userSer.editDataDB(this.editItemId, userData)
            .subscribe(
              () => {
                this.onFetchData();
              }
            );
          this.editItem = false;
        }

        else {
          this._userSer.onPostData(userData).subscribe(
            (res) => {
              if (res !== null) {
                this.onFetchData();
              }
            },
            (err) => {
            }
          )
        }
        this.templateForm.reset();

      }
    }
  }


  onFetchData() {
    this.spinnerUser = true;
    this._userSer.onGetDb().subscribe(
      (res) => {
        const data = JSON.stringify(res);
        this.users = JSON.parse(data);
        this.spinnerUser = false;
      },
      (err) => {
      }
    )
  }

  onEditUSer(userId: string, index: number) {
    console.log(this.users[index]);

    this.editItemId = userId;

    this.editItem = true;

    this.templateForm.setValue({
      name: this.users[index].name,
      technology: this.users[index].technology,
    })

  }


  // post deleteDb:-
  onDeleteData(userId: string) {
    this._userSer.onDeleteDb(userId).subscribe(() => {
      this.onFetchData();
    });
  }


}
