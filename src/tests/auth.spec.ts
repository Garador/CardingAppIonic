import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Testing Configuration
import { TestBed, ComponentFixture, async, inject} from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

//Made Software
import { MyApp } from '../app/app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
//Owned Providers
import {SocketconnectionProvider} from "../providers/socketconnection/socketconnection";
import {AuthProvider} from "../providers/auth/auth";
import {setServer} from "./mockBackendSetter";
//Configuration Object
import {Settings} from "../settings"
//Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
//Settings
export const firebaseConfig = Settings.getFirebaseConfig();
//Socket.io Configuration
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = Settings.getSocketIOConfig();
import {HttprequestServiceProvider} from "../providers/httprequest-service/httprequest-service";

let comp: MyApp;
let fixture: ComponentFixture<MyApp>;
declare var Promise: any;

describe('auth.spec.ts component', () => {
  var fullData:any;
  var socketProv:any;
  var testCount = 0;
  var testResults = [];
  var errorResults = [];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [MyApp, Page1, Page2],
        providers: [
          StatusBar,
          SplashScreen,
          SocketconnectionProvider,
          MockBackend,
          BaseRequestOptions,
          AuthProvider,
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

  beforeEach((done)=>{
    const authProvider = TestBed.get(AuthProvider);
    //authProvider
    switch(testCount){
      case 0: //Test LogIn
        authProvider.logIn("azolotloner@gmail.com", "20606280")
        .then((data)=>{
          console.log("MOCK LOG-IN RESULT: ",data);
          testResults[0] = data;
          done();
        })
        .catch((err)=>{
          errorResults[0] = err;
          done();
        });
      break;
      case 1: //Test LogOut
        done();
      break;
    }
    testCount++;
  });

  it("Should check log-in functionality", ()=>{
    expect(errorResults[0]).toBeUndefined();
    expect(testResults[0]).toBeDefined();
  });

  it("Should check log-out functionality", ()=>{
    //TODO Test LogOut.
  });

});
