import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {

    private username = String;
    private userId = String;

    setUserId(id){
        this.userId = id;
    }

    getUserId(){
        return this.userId;
    }


    setName(name) {
        this.username = name;
    }

    getName() {
        return this.username;
    }
}