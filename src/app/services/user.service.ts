import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';

const INITIAL_USERS: User[] = [
  {
    id: '1',
    name: 'María López',
    email: 'maria@smartcloset.com',
    password: 'admin123',
    role: 'Administrador',
  },
  {
    id: '2',
    name: 'Ana García',
    email: 'ana@example.com',
    password: 'usuario123',
    role: 'Usuario',
  },
  {
    id: '3',
    name: 'Carlos Ruiz',
    email: 'carlos@example.com',
    password: 'usuario123',
    role: 'Usuario',
  },
  {
    id: '4',
    name: 'Sofía Mendoza',
    email: 'sofia@example.com',
    password: 'usuario123',
    role: 'Usuario',
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() {}

  private users = signal<User[]>(INITIAL_USERS);

  readonly allUsers = this.users.asReadonly();

  getById(id: string): User | undefined {
    return this.users().find((user) => user.id === id);
  }

  updateUser(
    id: string,
    changes: Omit<User, 'id' | 'password'> & { password?: string },
  ): void {
    this.users.update((users) =>
      users.map((user) => {
        if (user.id !== id) return user;

        return {
          id,
          name: changes.name,
          email: changes.email,
          role: changes.role,
          password: changes.password?.trim() ? changes.password : user.password,
        };
      }),
    );
  }

  deleteUser(id: string): boolean {
    if (this.users().length <= 1) {
      return false;
    }

    this.users.update((users) => users.filter((user) => user.id !== id));
    return true;
  }
}
