import { Injectable } from '@angular/core';
import { user } from '../mock.data';

@Injectable()
export class UserService {
    constructor() {

    }

    getUsersList() {
        return user;
    }
}