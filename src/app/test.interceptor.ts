import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import {tap, catchError, of} from 'rxjs';
import { ServiceService } from './api/service.service';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor(private api: ServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = "ApiUrlToken";
    const newRequest =  request.clone({
      headers: request.headers.set('Auth-header', `Token ${token}`),
      withCredentials: true
    })
    console.log({request})
    return next.handle(newRequest).pipe(
      tap((evt:any)=> 
      {
        console.log(evt);
        
      }),
      catchError( (err: any) => {
        return of(err);
      }),
      finalize(()=>{
       
      })
    
    )
  }
}
