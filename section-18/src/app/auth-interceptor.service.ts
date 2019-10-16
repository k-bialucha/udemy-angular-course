import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const styledLog = (...args) => {
  console.log(
    '%c[interceptor]%c ' + args[0],
    'color: purple; font-weight: 600;',
    'color: black; font-weight: normal',
    ...args.slice(1)
  );
};

export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    styledLog('request about to be intercepted', req.method);

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

    return next.handle(request).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          styledLog('request response intercepted', event);
        }
      })
    );
  }
  constructor() {}
}
