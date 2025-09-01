import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

import { UsersService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class UsersStore {
  users = signal<User[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private usersService: UsersService) {}

  async loadUsers() {
    if (this.users().length > 0) return;

    this.loading.set(true);
    this.error.set(null);

    try {
      // szimulált késleltetés (pl. spinner megjelenítéséhez)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const data = await this.usersService.fetchUsers();
      this.users.set(data);
    } catch (err: any) {
      this.error.set(err?.message || 'Failed to fetch users');
      this.users.set([]);
    } finally {
      this.loading.set(false);
    }
  }
}
