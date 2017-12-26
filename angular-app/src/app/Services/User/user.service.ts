import { Injectable } from '@angular/core';

import { User } from './user';
import { MockUsers } from './server-user';

@Injectable()
export class UserService {
    getUsers(): Promise<User[]> {
        return Promise.resolve(MockUsers);
    }
}
