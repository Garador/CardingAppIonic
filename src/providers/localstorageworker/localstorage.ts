import { Injectable, Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage'; //https://ionicframework.com/docs/storage/

//Stores and retrieves data from the local storage.
@Injectable()
export class LocalStorageWorker {

  constructor(public storage:Storage) {
    console.log('Hello LocalstorageProvider Provider');
  }

  storeValue(key, value){
    this.storage.set(key, value);
  }

  getValue(key){
    return this.storage.get(key);
  }

  removeValue(key){
    this.storage.set(key, null);
  }

  storeSession(firebaseUserObj){
    const ref = this;
    return new Promise((accept, reject)=>{
      firebaseUserObj.getIdToken(true)
      .then((IDT)=>{
        ref.storeValue("IDT", IDT);
        accept();
      })
      .catch((err)=>{
        reject(err);
      });
    });
  }

  removeSession(firebaseUserObj){
    //Removes the session information
    const ref = this;
    return new Promise((accept, reject)=>{
      ref.storeValue("IDT", null);
      accept();
    });
  }

  getSession(firebaseUserObj){
    //Retrieves the session information
    const ref = this;
    return new Promise((accept, reject)=>{
      ref.getValue("IDT")
      .then((IDT)=>{
        accept({IDT:IDT});
      })
      .catch((err)=>{
        reject(err);
      });
    });
  }

}
