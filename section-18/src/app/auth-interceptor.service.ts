import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('[interceptor] request about to be intercepted', req.method);
    let request = req.clone({
      headers: req.headers.append('authorization', 'hello'),
    });

    if (req.method === 'POST') {
      const lowerCaseTitle = (<string>req.body.title).toLowerCase();
      const capitalizedTitle =
        lowerCaseTitle.charAt(0).toUpperCase() + lowerCaseTitle.slice(1) + '.';

      request = request.clone({
        body: {
          ...req.body,
          title: capitalizedTitle,
        },
      });
    }

    return next.handle(request);
  }
  constructor() {}
}
