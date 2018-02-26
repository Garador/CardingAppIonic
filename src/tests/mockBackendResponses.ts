import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class MockBackEndResponses {
  static responses = [
    { //Get
      "http://localhost:3000/api/auth/logIn":{
        body:'{"IDT":"a5s1d651as6d1as65d1asd.ad1as56d1a5s1d.as5d1a6s5d1a6sd81", "mock":true}'
        ,status:200
      }
    },{ //Post

    },{ //Put

    },{ //Delete

    }
  ];

  constructor(){

  }

  static getResponse(url, method){
    console.log("MockBackEndResponses getResponse: ",url," // ",method);
    if(typeof this.responses[method] === "object" && typeof this.responses[method][url] === "object"){
      return this.responses[method][url];
    }else{
      return {
        body:"Hey there!"
        ,status:200
      };
    }
  }

}
