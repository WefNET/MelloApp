import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WPService {
    constructor(private httpClient: HttpClient) { }

    getPosts() {
        return this.httpClient.get("http://mellowoman.com/?rest_route=/wp/v2/posts");
    }

    getCategories() {
        return this.httpClient.get("http://mellowoman.com/?rest_route=/wp/v2/categories");
    }

    getTags() {
        return this.httpClient.get("http://mellowoman.com/?rest_route=/wp/v2/tags");
    }
}