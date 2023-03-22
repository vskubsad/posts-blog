import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Post, Posts } from '../interfaces/post';
import { postsUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts = () => {
    return this.http
      .get<Posts>(postsUrl.getPosts)
      .pipe(map((response) => response))
      .pipe(catchError(this.handleError));
  };

  createPost = (requestBody: Post) => {
    return this.http
      .post<Post>(postsUrl.createPost, requestBody)
      .pipe(map((response) => response))
      .pipe(catchError(this.handleError));
  };

  handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}
