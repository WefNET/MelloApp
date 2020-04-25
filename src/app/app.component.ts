import { Component, OnInit } from '@angular/core';
import { WPService } from 'src/services/wp.service';

import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mello-app';
  posts; categories; tags;

  constructor(private _wp: WPService) { }
  
  ngOnInit() {
      let postsData = this._wp.getPosts();
      let categoryData = this._wp.getCategories();
      let tagsData = this._wp.getTags();
  
      forkJoin([postsData, categoryData, tagsData]).subscribe(results => {
        this.posts = results[0];
        this.categories = results[1];
        this.tags = results[2];

        console.log(results);
      });
  }
}
