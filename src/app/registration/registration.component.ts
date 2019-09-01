import { Users } from './users.model';

import { Component, Input } from '@angular/core';
import { ApiService } from '../shared/apiservice.service';

@Component({
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


    constructor(private apiService: ApiService) { }

    user: Users = new Users();

    submit(): void {
        // let data = {
        //     "name": this.user.name,
        //     "address": "something",
        //     "phone": "123455",
        //     "username": "ujjwalsingh",
        //     "password": this.user.password,
        //     "confirmPassword": this.user.password,
        //     "email": this.user.email,
        //     "role": "ADMIN"
        // };
        this.apiService.doPost("/user", this.user).subscribe(response => {
            console.log("add user success");
        }, error => {
            console.error("add user failed");
        })
    }
}