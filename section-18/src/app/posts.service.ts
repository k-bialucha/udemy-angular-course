import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

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

    this.httpClient.post<{ name: string }>(ENDPOINT_URL, post).subscribe(
      response => {
        console.warn('POST response', response);
      },
      () => {
        this.addPostError = 'Some POST error happened.';
      }
    );
  }

  fetchPosts(): Observable<Post[]> {
    return this.httpClient.get<{ [key: string]: Post }>(ENDPOINT_URL).pipe(
      map(responseData => {
        if (!responseData) return [];

        const keys = Object.keys(responseData);

        const objectList = keys.map((key: string) => ({
          id: key,
          ...responseData[key],
        }));
        return objectList;
      })
    );
  }

  clearPosts(): Observable<void> {
    return this.httpClient.delete<void>(ENDPOINT_URL);
  }
}
