import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Testing Configuration
import { TestBed, ComponentFixture, async, inject} from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions, RequestMethod} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {setServer} from "./mockBackendSetter";

import { MyApp } from '../app/app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
//Owned Providers
import {SocketconnectionProvider} from "../providers/socketconnection/socketconnection";
import {AuthProvider} from "../providers/auth/auth";
import {HttprequestServiceProvider} from "../providers/httprequest-service/httprequest-service";
//Configuration Object
import {Settings} from "../settings"
import {MockBackEndResponses} from "./mockBackendResponses";
//Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
//Settings
export const firebaseConfig = Settings.getFirebaseConfig();
//Socket.io Configuration
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = Settings.getSocketIOConfig();

let comp: MyApp;
let fixture: ComponentFixture<MyApp>;
declare var Promise: any;

describe('httprequest-service.spec.js ', () => {
  var fullData:any;
  var socketProv:any;
  var responsesData = [null, null];
  var errorData = [null, null];
  var testCount = -1;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [MyApp, Page1, Page2],
          providers: [
            StatusBar,
            SplashScreen,
            SocketconnectionProvider,
            MockBackend,
            BaseRequestOptions,
            HttprequestServiceProvider,
            {
                provide: Http,
                useFactory: (mockBackend, options) => {
                    return new Http(mockBackend, options);
                },
                deps: [MockBackend, BaseRequestOptions]
            },
            { provide: ErrorHandler, useClass: IonicErrorHandler }
          ],
          imports: [
              IonicModule.forRoot(MyApp),
              BrowserModule,
              IonicModule.forRoot(MyApp, {}, { links: [] }),
              AngularFireModule.initializeApp(firebaseConfig),
              AngularFireAuthModule,
              SocketIoModule.forRoot(config)
          ]
      }).compileComponents();
    }));

    beforeEach(function(){
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
      var mockBackend = setServer(TestBed.get(MockBackend), "httprequest-service.spec.ts");
    });

    afterEach((done)=>{
      switch(testCount){
        case 0: //Nothing yet...
          done();
        break;
        case 1: //Should execute a test request
          var HTTPp = TestBed.get(HttprequestServiceProvider);
          console.log("beforeEach --- 1");
          HTTPp.call({url:"http://localhost:3000/api/auth/logIn"})
          .then(function(data){
            responsesData[1] = data;
            console.log("beforeEach --- 1 DONE");
            done();
          })
          .catch(function(err){
            errorData[1] = err;
            console.log("beforeEach --- 1 DONE / ERR");
            done();
          });
        break;
        case 2: //Should execute a test request 2
          console.log("beforeEach --- 2");
          var HTTPp = TestBed.get(HttprequestServiceProvider);
          HTTPp.call({url:"http://localhost:3000/api/auth/logIn"})
          .then(function(data){
            console.log("beforeEach --- 2 DONE");
            responsesData[2] = data;
            done();
          })
          .catch(function(err){
            console.log("beforeEach --- 2 DONE / ERR");
            errorData[2] = err;
            done();
          });
        break;
        default:
          done();
        break;
      }
    });


    it("Should check httprequest-service.spec.js is ok", ()=>{
      expect(true).toBeTruthy();
      testCount++;
    });

    it("Should execute a test request", ()=>{
      testCount++;
    });

    it("Should execute a test request 2", ()=>{
      testCount++;
      console.log("responsesData: ",responsesData);
      console.log("errorData: ",errorData);
    });

});
