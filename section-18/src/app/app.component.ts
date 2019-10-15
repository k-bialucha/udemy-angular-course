import { Component, OnInit } from '@angular/core';

import { Post } from './post.model';

import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  private _isFetching = false;

  public get isFetching(): boolean {
    return this._isFetching;
  }

  public get postsAvailable(): boolean {
    return this.loadedPosts.length > 0;
  }

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.fetchPosts();
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
  }

  private fetchPosts() {
    this._isFetching = true;

    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      setTimeout(() => {
        this._isFetching = false;
      }, 900);
    });
  }
}
