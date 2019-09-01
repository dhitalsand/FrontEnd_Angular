import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Users {
    name: string;
    email: string;
    password: string;
    username: string;
    confirmPassword: string;
    role: string;
    address: string;


}