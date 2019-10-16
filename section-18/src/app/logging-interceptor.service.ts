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
    '%c[interceptor]%c\n' + args[0],
    'color: crimson; font-weight: 600; font-size: 120%;',
    'color: black;',
    ...args.slice(1)
  );
};

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    styledLog(
      'request about to be sent, method: ',
      req.method,
      ' URL: ',
      req.url
    );

    return next.handle(req).pipe(
      tap(event => {
        let enhancedData = '';
        if (event.type === HttpEventType.Response) {
          enhancedData = `status: ${event.status} ${event.statusText} | ${event.url}`;
        }
        const message = `event type: ${event.type}${enhancedData &&
          ' | ' + enhancedData}`;
        styledLog(message, event);
      })
    );
  }
}
