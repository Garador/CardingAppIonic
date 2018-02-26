import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Socket } from 'ng-socket-io';


@Injectable()
export class SocketconnectionProvider {

  constructor(private socket: Socket) {
    console.log('Hello SocketconnectionProvider Provider');
  }

  getSocket(){
    return this.socket;
  }

  getTimeout(){
    return (30)*1000; //TIMEOUT: 30sec.
  }

  call(params){
    const socket = this.getSocket();
    const timeOut = this.getTimeout();

    console.log("call params: ",params);
    /*params.callRoute
    params.responseRoute
    params.payload*/
    return new Promise((accept, reject)=>{
      let payload = {meta:{
        callID:Math.floor((Math.random() * (new Date().getTime())) + 1)
        ,auth:params.auth
      },payload:params.payload};
      socket.emit(params.callRoute, payload);
      let timeOutI = setTimeout(()=>{
        reject({where:1, text:"Exc: Timeout"});
      }, timeOut);
      socket.on(params.responseRoute, (data)=>{
        if(data.meta.callID == payload.meta.callID){
          clearTimeout(timeOutI);
          accept(data.payload);
        }
      });
    });
  }



}
