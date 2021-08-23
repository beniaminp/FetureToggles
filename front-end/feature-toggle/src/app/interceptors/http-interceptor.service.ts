import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private readonly URL = 'http://localhost:8082/v1/'

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    // if(req.url.indexOf())
    let authReq;
    authReq = req.clone({
      url: this.URL + req.url,
      headers: req.headers
        .set('Content-Type', 'application/json')
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
