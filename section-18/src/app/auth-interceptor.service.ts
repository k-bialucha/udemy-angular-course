import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('[interceptor] request about to be intercepted', req.method);

    if (req.method === 'POST') {
      const lowerCaseTitle = (<string>req.body.title).toLowerCase();
      const capitalizedTitle =
        lowerCaseTitle.charAt(0).toUpperCase() + lowerCaseTitle.slice(1) + '.';
      req.body.title = capitalizedTitle;
    }

    return next.handle(req);
  }
  constructor() {}
}
