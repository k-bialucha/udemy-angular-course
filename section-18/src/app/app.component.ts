import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Post } from './post.model';

const API_URL = 'https://angular-udemy-course-backend.firebaseio.com';
const POSTS_PATH = 'posts.json';

const ENDPOINT_URL = `${API_URL}/${POSTS_PATH}`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  private _isFetching: boolean = false;

  public get isFetching(): boolean {
    return this._isFetching;
  }

  public get postsAvailable(): boolean {
    return this.loadedPosts.length > 0;
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{ name: string }>(ENDPOINT_URL, postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this._isFetching = true;

    this.http
      .get<{ [key: string]: Post }>(ENDPOINT_URL)
      .pipe(
        map(responseData => {
          const keys = Object.keys(responseData);

          const objectList = keys.map((key: string) => ({
            id: key,
            ...responseData[key],
          }));
          return objectList;
        })
      )
      .subscribe(posts => {
        console.warn('GET posts response', posts[0]);
        this.loadedPosts = posts;

        setTimeout(() => {
          this._isFetching = false;
        }, 900);
      });
  }
}
