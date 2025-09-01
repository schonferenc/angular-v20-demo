import { Component, inject, OnInit } from '@angular/core';
import { UsersStore } from '../../stores/user.store';


@Component({
  selector: 'app-users-list',
  standalone: true,
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.scss'],
})
export class UsersList implements OnInit {
  private store = inject(UsersStore);

  users = this.store.users;
  loading = this.store.loading;
  error = this.store.error;

  ngOnInit() {
    this.store.loadUsers();
  }
}