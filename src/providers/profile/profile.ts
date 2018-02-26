import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';
import 'firebase/storage';


import { AngularFireAuth } from 'angularfire2/auth';
import {SocketconnectionProvider} from "../socketconnection/socketconnection";
import {AuthProvider} from "../auth/auth";
import {InputValidatorProvider} from "../input-validator/input-validator";
import {LocalStorageWorker} from "../localstorageworker/localstorage";
import {AlertProvider} from "../alert/alert";

import { Camera } from '@ionic-native/camera';




/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  constructor(private AFA:AngularFireAuth
    , private SCP:SocketconnectionProvider
    , private AUP: AuthProvider
    , private IVP:InputValidatorProvider
    , private LSW:LocalStorageWorker
    , private ALP:AlertProvider
    , private CMR:Camera) {
      //const storageRef = firebase.storage().ref();
      //storageRef.
  }

  getIDT(){
    const currentU = this.AFA.auth.currentUser;
    return new Promise((accept, reject)=>{
      currentU.getIdToken()
      .then((IDT)=>{
        accept(IDT);
      })
      .catch((err)=>{
        reject(err);
      });
    });
  }

  updateProfile_server(fields){ //Updates profile on Server.
    //PPR_emv: Emal Verified.
    //PPR_dna: Display Name.
    //PPR_emv: Email Verified.
    //PPR_phu: Photo URL.
    //PPR_eml: Email
    console.log("updateProfile_server fields: ",fields);
    const contx = this;
    return new Promise((accept, reject)=>{
      contx.getIDT()
      .then((IDT)=>{
        contx.SCP.call({
          callRoute:"/profile/update"
          ,responseRoute:"/profile/update"
          ,payload:{
            set:fields
          }
          ,auth:"IDT "+IDT
        })
        .then((data)=>{
          console.log("Call response data: ",data);
          accept();
        })
        .catch((err)=>{
          console.log("getProfile         4");
          reject(err);
        });
      })
      .catch((err)=>{
        reject(err);
      });
    });
  }

  updateProfile_firebase(fields){
    let ctx = this;
    return new Promise((accept, reject)=>{
      const profile = ctx.AFA.auth.currentUser;
      if(profile!=null){
        let updateFields = {displayName:profile.displayName, photoURL:profile.photoURL};
        if(fields.displayName && ctx.IVP.isValid_Username(fields.displayName)){
          updateFields.displayName = fields.displayName;
        }
        if(fields.photoURL && ctx.IVP.isValid_uri(fields.photoURL)){
          updateFields.photoURL = fields.photoURL;
        }
        profile.updateProfile(updateFields)
        .then(()=>{
          accept();
        })
        .catch((err)=>{
          reject({where:1,where0:"updateProfile_firebase", text:"User is not logged in."});
        });
      }else{
        reject({where:2,where0:"updateProfile_firebase", text:"User is not logged in."});
      }
    });
  }

  updateProfile(payload:any){  //Updates the Profile Basic Fields on Firebase and Server.
    let ctx = this;
    return new Promise((accept, reject)=>{
      let updatePromises = [];
      let requestReAuth = false;
      if(payload.email){
        requestReAuth = true;
      }
      let reAuthPromises = [];
      if(requestReAuth){
        reAuthPromises.push(ctx.AUP.reAuthenticate_emailAndPassword_0());
      }
      Promise.all(reAuthPromises)
      .then(()=>{
        if(payload.email){
          updatePromises.push(ctx.AFA.auth.currentUser.updateEmail(payload.email));
        }
        let updateProfile_fb = false;
        let updatePayload = {photoURL:ctx.AFA.auth.currentUser.photoURL, displayName:ctx.AFA.auth.currentUser.displayName};

        if(payload.displayName){
          updatePayload.displayName = payload.displayName;
          updateProfile_fb = true;
        }
        if(payload.photoURL){
          updatePayload.photoURL = payload.photoURL;
          updateProfile_fb = true;
        }
        if(updateProfile_fb){
          updatePromises.push(ctx.AFA.auth.currentUser.updateProfile(updatePayload));
        }
        Promise.all(updatePromises)
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject({where:2, err:err});
        });
      })
      .catch((err)=>{
        reject({where:3, err:err});
      });
    });
  }

  updateProfilePhoto(showLoading){
    //Upload an image to Firebase Storage bucket
    //and updates references.
    let options = {
        quality : 75,
        destinationType : this.CMR.DestinationType.DATA_URL,
        sourceType : this.CMR.PictureSourceType.PHOTOLIBRARY,
        allowEdit : true,
        targetWidth: 500,
        targetHeight: 500
    };
    let ctx = this;
    return new Promise((accept, reject)=>{
      ctx.CMR.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
       //http://www.offlineprogrammer.com/upload-images-firebase-storage-using-ionic-framework/
       //let base64Image = 'data:image/jpeg;base64,' + imageData;
       let alert = ctx.ALP.generateSimpleLoading("");
       if(showLoading){
         alert.present();
       }
       let uid = null;
       if(ctx.AFA.auth.currentUser!=null){
         uid = ctx.AFA.auth.currentUser.uid;
       }else{
         reject({where:4, text:"User is not logged in..."});
       }
       let ref = firebase.storage().ref("images/profilePics/"+uid);
       ref.putString(imageData, 'base64', { contentType: 'image/png' })
       .then((savedPicture)=>{
         //Update the personal data.
         ctx.updateProfile({
            photoURL:savedPicture.downloadURL
          })
          .then((data)=>{
            alert.dismiss();
            accept();
          })
          .catch((err)=>{
            alert.dismiss();
            reject({where:1, err:err});
          });
       })
       .catch((err)=>{
         alert.dismiss();
         reject({where:2, err:err});
       });
      }, (err) => {
       reject({where:3, err:err});
      });
    });
  }

  storeLocalProfile(parameters){
    let LSW = this.LSW;
    return new Promise((accept, reject)=>{
      LSW.storeValue("displayName",parameters.displayName);
      LSW.storeValue("email",parameters.email);
      LSW.storeValue("photoURL",parameters.photoURL);
      LSW.storeValue("emailVerified",parameters.emailVerified);
      LSW.storeValue("profileVersionN",parameters.profileVersionN);
      accept();
    });
  }

  storeProfile(serverRecord, recentAuth){
    //Updates the profile record from the local storage AND the server
    //record (if found unmatching), given a record from the server on
    //raw form (meta fields)
    const currentU = this.AFA.auth.currentUser;
    const ctx = this;
    return new Promise((accept, reject)=>{
      if(currentU !== null){
        ctx.storeLocalProfile({
          displayName:serverRecord.PPR_dna
          ,email:serverRecord.PPR_eml
          ,photoURL:serverRecord.PPR_phu
          ,emailVerified:serverRecord.PPR_emv
          ,profileVersionN:serverRecord.PPR__vn
        })
        .then((data)=>{
          accept({data:serverRecord});
        })
        .catch((err)=>{
          reject({where0:"storeProfile",where:1, text:"Error localStoring data."});
        });
      }
      else{
        reject({where0:"storeProfile",where:4, text:"currentU is null."});
      }
    });
  }

  solveDataConflicts(serverRecord, recentAuth){ //Updates the server and firebase data acording the given and received data.
      const currentU = this.AFA.auth.currentUser;
      let serverPayload = {PPR_phu:null, PPR_dna:null, PPR_emv:null, PPR_eml:null};
      let firebasePayload = {displayName:null, photoURL:null}
      let requiresServerUpdate = false, requiresFirebaseUpdate = false;
      let requiresReAuth = false;
      serverPayload.PPR_phu = ((serverRecord.PPR_phu) !== currentU.photoURL) ? currentU.photoURL : null;
      firebasePayload.photoURL = (currentU.photoURL === null && typeof serverRecord.PPR_phu === "string") ? serverRecord.PPR_phu : null;

      serverPayload.PPR_dna = (serverRecord.PPR_dna !== currentU.displayName)? currentU.displayName : null;
      firebasePayload.displayName = (currentU.displayName === null && typeof serverRecord.PPR_dna === "string") ? serverRecord.PPR_dna : null;

      serverPayload.PPR_emv = (serverRecord.PPR_emv !== currentU.emailVerified) ? currentU.emailVerified : null;
      serverPayload.PPR_eml = (serverRecord.PPR_eml !== currentU.email) ? currentU.email : null;

      requiresServerUpdate = (serverPayload.PPR_phu!==null) || (serverPayload.PPR_dna!==null) || (serverPayload.PPR_emv!==null) || (serverPayload.PPR_eml!==null);
      requiresFirebaseUpdate = (firebasePayload.displayName!==null) || (firebasePayload.photoURL!==null);
      requiresReAuth = (serverPayload.PPR_eml!==null && !recentAuth);
      const ctx = this;
      return new Promise((accept, reject)=>{
        if((requiresServerUpdate || requiresFirebaseUpdate) && !requiresReAuth){
          let updatePromises = [];
          if(requiresServerUpdate){
            updatePromises.push(ctx.updateProfile_server(serverPayload));
          }
          if(requiresFirebaseUpdate){
            updatePromises.push(ctx.updateProfile_firebase(firebasePayload));
          }
          Promise.all(updatePromises)
          .then((data)=>{
            accept({updated:true});
          })
          .catch((err)=>{
            reject({where:1, err:err});
          });
        }else{
          if(requiresReAuth){
            reject({where:2, requiresReAuth:requiresReAuth});
          }else{
            accept({updated:false});
          }
        }
      });
  }

  getProfile(recentAuth){ //Gets profile from the server and stores it to local storage.
    const contx = this;
    return new Promise((accept, reject)=>{
      if(contx.AFA.auth.currentUser!=null){
        contx.getIDT()
        .then((IDT)=>{
          console.log("IDT: ",IDT);
          contx.SCP.call({
            callRoute:"/profile/get"
            ,responseRoute:"/profile/get"
            ,payload:{
              exact:{
                uid:contx.AFA.auth.currentUser.uid
              },
              return:{
                eml:true
                ,dna:true
                ,phu:true
                ,emv:true
                ,_vn:true
              }
            }
            ,auth:"IDT "+IDT
          })
          .then((data)=>{
            contx.storeProfile(data, recentAuth)
            .then((storedData:any)=>{
              contx.solveDataConflicts(data, recentAuth)
              .then((data:any)=>{
                if(data.updated){
                  reject({where0:"getProfile", "where":0, refreshRequired:true});
                }else{
                  accept(storedData.data);
                }
              })
              .catch((err)=>{
                reject({where0:"getProfile",where:1, err:err});
              });
            })
            .catch((err)=>{
              reject({where0:"getProfile",where:2, err:err});
            });
          })
          .catch((err)=>{
            reject({where0:"getProfile",where:3, err:err});
          });
        })
        .catch((err)=>{
          reject({where0:"getProfile",where:4, err:err});
        });
      }else{
        reject({where0:"getProfile",where:5, text:"The user is not logged in."});
      }
    });
  }

  getUserOwnedCards(skip, limit, optionalReturn:any){
    const contx = this;
    return new Promise((accept, reject)=>{
      contx.getIDT()
      .then((IDT)=>{
        contx.SCP.call({
          callRoute:"/cards/get"
          ,responseRoute:"/cards/get"
          ,payload:{
            return:{
              fields:(typeof optionalReturn === "object" && optionalReturn!=null) ? optionalReturn : {
                _id:true
                ,_la:true
              }
              ,paging:{
                skip:skip
                ,limit:limit
              }
            }
          }
          ,auth:"IDT "+IDT
        })
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject({where:1, err:err});
        });
      })
      .catch((err)=>{
        reject({where:2, err:err});
      });
    });
  }

  getUserOwnedCard(_id, optionalReturn:any){
    const contx = this;
    return new Promise((accept, reject)=>{
      contx.getIDT()
      .then((IDT)=>{
        contx.SCP.call({
          callRoute:"/cards/get"
          ,responseRoute:"/cards/get"
          ,payload:{
            _id:{
              exact:true
              ,value:_id
            },
            return:{
              fields:(typeof optionalReturn === "object" && optionalReturn!=null) ? optionalReturn : {
                _id:true
                ,_la:true
              }
            }
          }
          ,auth:"IDT "+IDT
        })
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject({where:1, err:err});
        });
      })
      .catch((err)=>{
        reject({where:2, err:err});
      });
    });
  }

  createUserCard(fieldsPayload){
    const ctx = this;
    return new Promise((accept, reject)=>{
      ctx.getIDT()
      .then((IDT)=>{
        fieldsPayload.return = {
          fields:{
            _id:true
          }
        };
        ctx.SCP.call({
          callRoute:"/cards/add"
          ,responseRoute:"/cards/add"
          ,payload:fieldsPayload
          ,auth:"IDT "+IDT
        })
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject({where:1, err:err});
        });
      })
      .catch((err)=>{
        reject({where:1, err:err});
      });
    });
  }

  updateUserOwnedCard(fieldsPayload, cardID:string){
    const ctx = this;
    return new Promise((accept, reject)=>{
      ctx.getIDT()
      .then((IDT)=>{
        fieldsPayload.return = {
          fields:{
            _id:true
          }
        };
        fieldsPayload._id = {
          exact:true
          ,value:cardID
        };
        ctx.SCP.call({
          callRoute:"/cards/update"
          ,responseRoute:"/cards/update"
          ,payload:fieldsPayload
          ,auth:"IDT "+IDT
        })
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject({where:1, err:err});
        });
      })
      .catch((err)=>{
        reject({where:1, err:err});
      });
    });
  }

  deleteUserOwnedCard(cardID:string){
    const ctx = this;
    return new Promise((accept, reject)=>{
      ctx.getIDT()
      .then((IDT)=>{
        ctx.SCP.call({
          callRoute:"/cards/delete"
          ,responseRoute:"/cards/delete"
          ,payload:{
            _id:cardID
            ,return:{
              _id:true
            }
          }
          ,auth:"IDT "+IDT
        })
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject({where:1, err:err});
        });
      })
      .catch((err)=>{
        reject({where:1, err:err});
      });
    });
  }

  bindToCard(cardID, passw:any){
    const ctx = this;
    return new Promise((accept, reject)=>{
      ctx.getIDT()
      .then((IDT)=>{
        ctx.SCP.call({
          callRoute:"/cards/bind"
          ,responseRoute:"/cards/bind"
          ,payload:{
            _id:cardID
            ,cde:(typeof passw === "string") ? passw : ""
            ,return:{
              _id:true
            }
          }
          ,auth:"IDT "+IDT
        })
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject({where:1, err:err});
        });
      })
      .catch((err)=>{
        reject({where:1, err:err});
      });
    });
  }

  getUserBoundCards(skip, limit, optionalReturn:any){
    const contx = this;
    return new Promise((accept, reject)=>{
      contx.getIDT()
      .then((IDT)=>{
        contx.SCP.call({
          callRoute:"/cards/getBoundCards"
          ,responseRoute:"/cards/getBoundCards"
          ,payload:{
            return:{
              fields:(typeof optionalReturn === "object" && optionalReturn!=null) ? optionalReturn : {
                _id:true
                ,_la:true
              }
              ,paging:{
                skip:skip
                ,limit:limit
              }
            }
          }
          ,auth:"IDT "+IDT
        })
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject({where:1, err:err});
        });
      })
      .catch((err)=>{
        reject({where:2, err:err});
      });
    });
  }

  getUserBoundCard(_id, optionalReturn:any){
    const contx = this;
    return new Promise((accept, reject)=>{
      contx.getIDT()
      .then((IDT)=>{
        contx.SCP.call({
          callRoute:"/cards/getBoundCards"
          ,responseRoute:"/cards/getBoundCards"
          ,payload:{
            _id:{
              exact:true
              ,value:_id
            },
            return:{
              fields:(typeof optionalReturn === "object" && optionalReturn!=null) ? optionalReturn : {
                _id:true
                ,_la:true
              }
            }
          }
          ,auth:"IDT "+IDT
        })
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject({where:1, err:err});
        });
      })
      .catch((err)=>{
        reject({where:2, err:err});
      });
    });
  }

  unbindCard(cardID:string){
    const ctx = this;
    return new Promise((accept, reject)=>{
      ctx.getIDT()
      .then((IDT)=>{
        ctx.SCP.call({
          callRoute:"/cards/deleteUserBoundCard"
          ,responseRoute:"/cards/deleteUserBoundCard"
          ,payload:{
            _id:cardID
            ,return:{
              _id:true
            }
          }
          ,auth:"IDT "+IDT
        })
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject({where:1, err:err});
        });
      })
      .catch((err)=>{
        reject({where:1, err:err});
      });
    });
  }

}
