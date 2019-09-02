import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/apiservice.service';
import { Users } from './users.model';

type NewType = Array<Users>;

@Component({
    templateUrl: './listusers.component.html',
    styleUrls: ['./registration.component.css']
})
export class ListUserComponent {

    user: Array<Users> = [];

    constructor(private apiService: ApiService) {
        this.apiService.doGet("/user").subscribe((user) => {
            this.user = user as Array<Users>;
            console.log(this.user);
        }, error => {
            console.error("get user failed");
        })
    }

    ngOnInit() {


    }

}