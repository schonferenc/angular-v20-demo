import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { apiClient } from '../api/axios.config';

@Injectable({ providedIn: 'root' })
export class UsersService {
  async fetchUsers(): Promise<User[] | null> {
    try {
      const response = await apiClient.get<User[]>('/users');
      return response.data;
    } catch (err) {
      console.error('Error fetching users:', err);
      return null;
    }
  }
}
