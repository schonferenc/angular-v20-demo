import { User } from '../../models/user.model';
import { Component, signal } from '@angular/core';
import { UsersService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  users = signal<User[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private userService: UsersService) {}

  async ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    this.loading.set(true);
    this.error.set(null);

    try {
      // szimulált késleltetés
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const data = await this.userService.fetchUsers();

      if (data && data.length > 0) {
        this.users.set(data);
      } else {
        this.users.set([]);
      }
    } catch (err: any) {
      this.error.set(err?.message || 'Failed to fetch users');
    } finally {
      this.loading.set(false);
    }
  }
}
