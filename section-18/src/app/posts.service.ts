import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpEvent,
  HttpEventType,
} from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Post } from './post.model';

const API_URL = 'https://angular-udemy-course-backend.firebaseio.com';
const POSTS_PATH = 'posts.json';

const ENDPOINT_URL = `${API_URL}/${POSTS_PATH}`;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private _loadedPosts: Post[] = [];

  public addPostErrorSubject: Subject<string> = new Subject<string>();
  private _addPostError: string;

  private set addPostError(value: string) {
    this._addPostError = value;
    this.addPostErrorSubject.next(this._addPostError);
  }

  private get addPostError(): string {
    return this._addPostError;
  }

  public get loadedPosts(): Post[] {
    return this._loadedPosts;
  }

  constructor(private httpClient: HttpClient) {}

  createPost(title: string, content: string): void {
    this.addPostError = null;

    const post = new Post(title, content);

    this.httpClient
      .post<{ name: string }>(ENDPOINT_URL, post, {
        // default:
        // observe: 'body',
        observe: 'response',
      })
      .subscribe(
        response => {
          console.warn(
            'POST response:',
            response.body,
            response.status,
            response.url
          );
        },
        () => {
          this.addPostError = 'Some POST error happened.';
        }
      );
  }

  fetchPosts(): Observable<Post[]> {
    const httpParams = new HttpParams()
      .append('print', 'pretty')
      .append('someKey', '-5');

    return this.httpClient
      .get(ENDPOINT_URL, {
        headers: new HttpHeaders({ 'some-header': 'hello' }),
        params: httpParams,
        // default:
        // responseType: 'json',
        responseType: 'text',
      })
      .pipe(
        map(responseText => {
          // handle own parsing from text to POJO
          const responseData = JSON.parse(responseText);

          if (!responseData) return [];

          const keys = Object.keys(responseData);

          const objectList = keys.map((key: string) => ({
            id: key,
            ...responseData[key],
          }));
          return objectList;
        }),
        catchError((error: HttpErrorResponse) => {
          console.warn('ERROR - caught', error);
          console.log('will re-throw error');
          return throwError(error);
        })
      );
  }

  clearPosts(): Observable<HttpEvent<void>> {
    return this.httpClient
      .delete<void>(ENDPOINT_URL, { observe: 'events' })
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Sent) {
            console.log('sent event!', event);
          }
          if (event.type === HttpEventType.Response) {
            const eventStatusText = event.statusText;
            console.log('response event!', event, eventStatusText);
          }
        })
      );
  }
}
