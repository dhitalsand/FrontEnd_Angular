import { Users } from './users.model';

import { Component} from '@angular/core';
import { ApiService } from '../shared/apiservice.service';

@Component({
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
   
   
    

    constructor(private apiService: ApiService) {      
    }

    user: Users = new Users();
    response : any;
    error : any;
    respStatus : String;


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
            this.response = response;         
        }, error => {
            this.error = error;     
        }) 
       this.showStatus();
    }
    
    showStatus() : void{
        if (this.response){
            this.respStatus = "user added succesfully";   
        }
        else if (this.error)
        this.respStatus = "Unable to add user. Please try again";     
    }
}