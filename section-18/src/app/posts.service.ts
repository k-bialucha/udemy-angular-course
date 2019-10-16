import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { Observable } from 'rxjs';

const API_URL = 'https://angular-udemy-course-backend.firebaseio.com';
const POSTS_PATH = 'posts.json';

const ENDPOINT_URL = `${API_URL}/${POSTS_PATH}`;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  // private _isFetching: boolean = false;
  private _loadedPosts: Post[] = [];

  public get loadedPosts(): Post[] {
    return this._loadedPosts;
  }
  // public get isFetching(): boolean {
  //   return this._isFetching;
  // }

  constructor(private httpClient: HttpClient) {}

  createPost(title: string, content: string): void {
    const post = new Post(title, content);

    console.warn('new post is:', post);

    this.httpClient
      .post<{ name: string }>(ENDPOINT_URL, post)
      .subscribe(response => {
        console.warn('POST response', response);
      });
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
