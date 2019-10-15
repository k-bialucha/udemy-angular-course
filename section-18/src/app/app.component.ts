import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://angular-udemy-course-backend.firebaseio.com';
const POSTS_PATH = 'posts.json';

const ENDPOINT_URL = `${API_URL}/${POSTS_PATH}`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post(ENDPOINT_URL, postData).subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}