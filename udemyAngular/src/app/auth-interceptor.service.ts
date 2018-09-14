import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpInterceptor,
   HttpEvent,
    HttpHandler, 
    HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  //add provider in the mainmodule (AppModule)
  //adding an interceptor before sending request 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    req.headers.append('Authorization','tokens'); //here we can add as we like
    return next.handle(req);
  }
}
