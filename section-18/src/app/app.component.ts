import { Component, OnInit, OnDestroy } from '@angular/core';

import { Post } from './post.model';

import { PostsService } from './posts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  fetchingError: string = null;
  creatingError: string = null;

  loadedPosts: Post[] = [];
  private _isFetching = false;

  private _subscription: Subscription;

  public get isFetching(): boolean {
    return this._isFetching;
  }

  public get postsAvailable(): boolean {
    return this.loadedPosts.length > 0;
  }

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.fetchPosts();

    this._subscription = this.postsService.addPostErrorSubject.subscribe(
      error => {
        this.creatingError = error;
      }
    );
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createPost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.postsService.clearPosts().subscribe(ss => {
      this.fetchPosts();
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private fetchPosts() {
    this._isFetching = true;
    this.fetchingError = null;

    this.postsService.fetchPosts().subscribe(
      posts => {
        this.loadedPosts = posts;
        setTimeout(() => {
          this._isFetching = false;
        }, 900);
      },
      (error: HttpErrorResponse) => {
        const { error: apiError, status, statusText, url } = error;

        const message = `
          ${status} ${statusText} 
          | API responded: "${apiError.error}" 
          | URL: ${url}"
          `;

        this._isFetching = false;
        this.fetchingError = message;
      }
    );
  }
}
