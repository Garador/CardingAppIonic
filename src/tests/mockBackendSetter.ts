import {MockBackEndResponses} from "./mockBackendResponses";
import { Response, ResponseOptions} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

export const setServer = (mockBackend:MockBackend, from)=>{
  if(from === "httprequest-service.spec.ts"){
    mockBackend.connections.subscribe((connection) => {
      const response = MockBackEndResponses.getResponse(connection.request.url, connection.request.method);
      connection.mockRespond(new Response(new ResponseOptions(response)));
    });
    return mockBackend;
  }else{
    return mockBackend;
  }
}
